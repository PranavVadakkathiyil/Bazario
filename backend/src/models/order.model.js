import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        size: {
          type: String,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    paymentMode: {
      type: String,
      enum: ["cod", "Razorpay"],
      required: true,
    },
    transactionId: {
      type: String, // For online payments
    },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    address: {
      type: String,
      required:true
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);