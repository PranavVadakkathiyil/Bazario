import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "password required"],
    },
    Address: [
      {
        type: String,
        required: true,
      },
    ],
    whislist: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    store: {
      type: Schema.Types.ObjectId,
      ref: "Store",
    },
    cart: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          min: 1,
          required: true,
        },
      },
    ],
    orders: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        paymentMode: {
          type: String,
          enum: ["pending", "cod", "online"],
          default: "pending",
        },
      },
    ],

    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRTE,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.ACCESS_TOKEN_SECRTE,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};
export const User = mongoose.model("User", userSchema);
