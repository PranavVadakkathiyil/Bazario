import asyncHandler from "../utils/asyncHandler.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { Product } from "../models/product.model.js";
const addProduct = asyncHandler(async (req, res) => {
  const {
    productName,
    description,
    price,
    mainCategory,
    Category,
    SubCategory,
  } = req.body;

  const image1 = req.files.image1 && req.files.image1[0];
  const image2 = req.files.image2 && req.files.image2[0];
  const image3 = req.files.image3 && req.files.image3[0];
  const image4 = req.files.image4 && req.files.image4[0];
  const images = [image1, image2, image3, image4].filter(
    (item) => item !== undefined
  );

  let imageUrl = await Promise.all(
    images.map(async (item) => {
      let result = await uploadToCloudinary(item.path);
      return result.url;
    })
  );
  const product = await Product.create({
    productName,
    description,
    price,
    mainCategory,
    Category,
    SubCategory,
    image: imageUrl,
  });
  const productCreated = await Product.findById(product._id);
  if (!productCreated) {
    throw new ApiError(409, "Error occured on Product creation");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(200, { productCreated }, "Product Add to productCreated")
    );
});
const editProduct = asyncHandler(async (req, res) => {
  const {
    productId,
    productName,
    description,
    price,
    mainCategory,
    Category,
    SubCategory,
  } = req.body;

  const image1 = req.files.image1 && req.files.image1[0];
  const image2 = req.files.image2 && req.files.image2[0];
  const image3 = req.files.image3 && req.files.image3[0];
  const image4 = req.files.image4 && req.files.image4[0];
  const images = [image1, image2, image3, image4].filter(
    (item) => item !== undefined
  );
  const product = await Product.findById(productId);
  if (!product) {
    throw new ApiError(409, "Product Not Avilable ");
  }
  let imageUrl = await Promise.all(
    images.map(async (item) => {
      let result = await uploadToCloudinary(item.path);
      return result.url;
    })
  );
  product.productName = productName || product.productName;
  product.description = description || product.description;
  product.price = price || product.price;
  product.mainCategory = mainCategory || product.mainCategory;
  product.Category = Category || product.Category;
  product.SubCategory = Category || product.SubCategory;
  product.image = [...product.image, ...imageUrl];

  const updateProduct = await product.save();
  if (!updateProduct) {
    throw new ApiError(409, "Product not updated");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, { updateProduct }, "Product Updated"));
});

const getSingleProduct = asyncHandler(async (req, res) => {
  const { productId } = req.body;
  const product = await Product.findById(productId);
  if (!product) {
    throw new ApiError(409, "Product Not Avilable ");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, { product }, "Single Product"));

  
});
const deleteProduct = asyncHandler(async (req, res) => {
  const { productId } = req.body;
  const product = await Product.findById(productId);
  if (!product) {
    throw new ApiError(409, "Product Not Avilable ");
  }
  const ProductDeleted = await Product.findByIdAndDelete(productId) 
  return res
    .status(201)
    .json(new ApiResponse(200, {}, "Product Deleted"));
});
const listAllProducts = asyncHandler(async(req,res)=>{
  const listProducts = await Product.find({})
  if(!listAllProducts){
    throw new ApiError(409,"Error occured on listing Product")
  }
})

export { addProduct, editProduct, getSingleProduct, deleteProduct };