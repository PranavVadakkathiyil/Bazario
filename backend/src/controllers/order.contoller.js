import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import { Cart } from "../models/cart.model.js";
import Razorpay from "razorpay";
import { Order } from "../models/order.model.js";

const RazorpayInstence = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
const getUserOrders = asyncHandler(async (req, res) => {
  
  const user = req.user
  const order = await Order.findOne({ user: user.id });
  if (!order) {
    throw new ApiError(409, "Not Existing user cart");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { order }, "Order getAllOrder successfully"));
});

const OrderInCash = asyncHandler(async (req, res) => {
  const {  Buyeraddress,paymentmode } = req.body;
  const user = req.user
  const cart = await Cart.findOne({ user: user.id });
  if (!cart) {
    throw new ApiError(409, "Not Existing user cart");
  }
  console.log(cart);
  
  const makeOrder = {
    user: user.id,
    products: cart.items.map((item) => ({
      product: item.product,
      quantity: item.quantity,
      size: item.size
    })),
    totalPrice: cart.totalPrice,
    paymentMode: paymentmode, 
    paymentReference: "cod",
    status: "pending",
    address: Buyeraddress,
  };
  if (!makeOrder) {
    throw new ApiError(409, "Error To create Order");
  }
  const CreatedOrder = await Order.create(makeOrder);
  if (!CreatedOrder) {
    throw new ApiError(409, "Error To Place Order");
  }
  const deleteCartItem = await Cart.findOneAndDelete({ user: user.id });
  if (!deleteCartItem) {
    throw new ApiError(500, "Failed to clear user cart.");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Order Created successfully"));
});

const orderInRazorpay = asyncHandler(async (req, res) => {
  const { userId, Buyeraddress } = req.body;
  const cart = await Cart.findOne({ user: userId });
  if (!cart) {
    throw new ApiError(409, "Not Existing user cart");
  }
  const makeOrder = await Order.create({
    user: userId,
    products: cart,
    totalPrice: cart.totalPrice,
    paymentMode: "Razorpay",
    status: "pending",
    address: Buyeraddress,
  });
  if (!makeOrder) {
    throw new ApiError(409, "Error To create Order");
  }

  const options = {
    amount: makeOrder.totalPrice * 100,
    currency: "INR",
    receipt: makeOrder._id.toString(),
  };
  console.log(options);

  try {
    razorpayOrder = await RazorpayInstence.orders.create(options);
  } catch (error) {
    console.error("Razorpay order creation error:", error.message);
    throw new ApiError(500, "Failed to create Razorpay order.");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { order: makeOrder, razorpayOrder },
        "Order created successfully on Razorpay Payment"
      )
    );
});

export { OrderInCash, orderInRazorpay, getUserOrders };
