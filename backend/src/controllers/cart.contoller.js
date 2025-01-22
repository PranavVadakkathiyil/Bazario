import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { Product } from "../models/product.model.js";
import { Cart } from "../models/cart.model.js";

const getCart = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  const cart = await Cart.findOne({ user: userId }).select("items");
  if (!cart) {
    throw new ApiError(409, "Somthing wrong on GettingCart");
  }
  const totalPrice = 0;
  const totalQuantity = 0;
  cart.items.forEach((item) => {
    totalPrice = item.product.price * item.quantity;
    totalQuantity += item.quantity;
  });

  if (cart.totalPrice !== totalPrice) {
    cart.totalPrice === totalPrice;
  }
  await cart.save();
  return res.status(200).json(201, { cart,totalQuantity }, "cart getted successfully");
});
const addToCart = asyncHandler(async (req, res) => {
  const { userId, productId, Quantity , measurement } = req.body;
  if (Quantity >= 0) {
    throw new ApiError(409, "Quantity must Add");
  }
  if (!measurement) {
    throw new ApiError(409, "measurement Should be provided");
  }
  if (!userId || !productId) {
    throw new ApiError(409, "Somthing wrong deatils GettingCart");
  }
  const product = await Product.findOne(productId);
  if (!product) {
    throw new ApiError(409, "Product not avilable");
  }
  const cart = await Cart.findById({ user: userId });
  if (!cart) {
    cart = await Cart.create({
      user: userId,
      item: [
        {
          product: productId,
        
        
          quantity: Quantity,
        
        
          size: measurement,
        }
      ],
    });
  } else {
    const exisingItem = Cart.items.findIndex(
      (item) => item.product.toString() === productId && item.size === measurement
    );

    if (exisingItem >= 0) {
      Cart.items[exisingItem].quantity += Quantity;
    } else {
      Cart.items.push({
        product: productId,
        quantity: Quantity,
        size: measurement,
      });
    }
    const saveToCart = await Cart.save();
    if (!saveToCart) {
      throw new ApiError(409, "Cart not Saved");
    }
    return res
      .status(200)
      .json(201, { saveToCart }, "save to cart successfully");
  }
});
const deleteItem = asyncHandler(async(req,res)=>{
    const {userId,productId,measurement} = req.body
    if(!userId || !productId || !measurement){
        throw new ApiError(409, "User and Product Not fetched");
    }
    const cart = await Cart.findOne({user:userId})
    if(!cart){
        throw new ApiError(409, "Not Existing user cart");
    }
    const ProdutItemIndex = cart.items.findIndex((item)=>item.product.toString()===productId && item.size === measurement)
    if(!ProdutItemIndex){
        throw new ApiError(409, "Not Such Item in cart");
    }
    const deleteCartItem = cart.items.splice(ProdutItemIndex,1)
    if(!deleteCartItem){
        throw new ApiError(409, "Not deleted CartItem");
    }
    return res
      .status(200)
      .json(201, {}, "Item Deleted from cart successfully");
})

export { getCart, addToCart ,deleteItem};
