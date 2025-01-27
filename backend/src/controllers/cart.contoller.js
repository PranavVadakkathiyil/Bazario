import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { Product } from "../models/product.model.js";
import { Cart } from "../models/cart.model.js";

const getCart = asyncHandler(async (req, res) => {
  const user = req.user
  
  const cart = await Cart.findOne({ user: user._id }).select("items");
  if (!cart) {
    throw new ApiError(409, "Somthing wrong on GettingCart");
  }
  let totalPrice = 0;
  let totalQuantity = 0;
  cart.items.forEach((item) => {
    totalPrice = item.product.price * item.quantity;
    totalQuantity += item.quantity;
  });

  if (cart.totalPrice !== totalPrice) {
    cart.totalPrice === totalPrice;
  }
  await cart.save();

  return res
    .status(200)
    .json(
      new ApiResponse(200, { cart, totalQuantity }, "cart getted successfully")
    );
});
const addToCart = asyncHandler(async (req, res) => {
  const { productId, Quantity, measurement } = req.body;
  console.log(req.user.cart,"UserId");
  const user = req.user
  if (Quantity <= 0) {
    throw new ApiError(409, "Quantity must Add");
  }
  if (!measurement) {
    throw new ApiError(409, "measurement Should be provided");
  }
  if (!user || !productId) {
    throw new ApiError(409, "Somthing wrong deatils GettingCart");
  }
  const product = await Product.findById(productId);
  if (!product) {
    throw new ApiError(409, "Product not avilable");
  }
  const cart = await Cart.findOne({ user: user._id  });
  if (!cart) {
     await Cart.create({
      user: user._id ,
      item: [
        {
          product: productId,

          quantity: Quantity,

          size: measurement,
        },
      ],
    });
  } else {
    const exisingItem = cart.items.findIndex(
      (item) =>
        item.product.toString() === productId && item.size === measurement
    );

    if (exisingItem >= 0) {
      cart.items[exisingItem].quantity += Quantity;
    } else {
      cart.items.push({
        product: productId,
        quantity: Quantity,
        size: measurement,
      });
    }
    const saveToCart = await cart.save();
    if (!saveToCart) {
      throw new ApiError(409, "Cart not Saved");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, { saveToCart }, "save to cart successfully"));
  }
});
const deleteItem = asyncHandler(async (req, res) => {
  const {  productId, measurement } = req.body;
  const user = req.user
  if (!user || !productId || !measurement) {
    throw new ApiError(409, "User and Product Not fetched");
  }
  const cart = await Cart.findOne({ user: user._id });
  if (!cart) {
    throw new ApiError(409, "Not Existing user cart");
  }
  const ProdutItemIndex = cart.items.findIndex(
    (item) => item.product.toString() === productId && item.size === measurement
  );
  if (ProdutItemIndex === -1) {
    throw new ApiError(409, "Not Such Item in cart");
  }
  cart.items.splice(ProdutItemIndex,1);
  const savecart = await cart.save()
  if (!savecart) {
    throw new ApiError(409, "Not deleted CartItem");
  }
  

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Item Deleted from cart successfully"));
});

export { getCart, addToCart, deleteItem };
