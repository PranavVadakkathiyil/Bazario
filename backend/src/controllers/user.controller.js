import asyncHandler from '../utils/asyncHandler.js'
import { User } from '../models/user.model.js'
import { uploadToCloudinary } from '../utils/cloudinary.js'
import ApiResponse from '../utils/ApiResponse.js'
import ApiError from '../utils/ApiError.js'

const generateAccessAndRefreshToken = async(userId)=>{
    
    try {
        const user = await User.findById(userId)
        console.log(user);
        
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        console.log(refreshToken);
        
        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})
        return {accessToken,refreshToken}
    } catch (error) {
        console.log(error);
        
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    
    }
}
const registerUser = asyncHandler(async(req,res)=>{
    const {username,email,password} = req.body
    if([username,email,password].some((item)=>item?.trim()==="")){
        throw new ApiError(400, "All fileds are required")
    }
    const userExist = await User.findOne({
        $or:[{username,email}]
    })
    if(userExist){
        throw new ApiError(409,"User already exists")
    }
    const avatarLocalfilePath = req.files?.avatar[0]?.path;
    if(!avatarLocalfilePath){
        throw new ApiError(409,"Avatar required")
    }
    const avatar = await uploadToCloudinary(avatarLocalfilePath)
    console.log(avatar,"avatar consol");
    

    const user = await User.create({
        username,email,password,avatar:avatar.url
    })
    const createdUser = await User.findById(user._id).select("-password -refreshToken")
    if(!createdUser){
        throw new ApiError(409,"Somthing wrong on registering")
    }
    return res.status(201).json(
        new ApiResponse(200,createdUser,"User REgistered successfully")
    )
})
const loginUser = asyncHandler(async(req,res)=>{
    const {username,password}=req.body
    console.log(username,password);
    
    if(!username || !password){
        throw new ApiError(409,"All field required")

    }
    const user = await User.findOne({username})
    
    
    if(!user){
        throw new ApiError(409,"User Not exists")

    }
  
    const isPasswordValid = await user.isPasswordCorrect(password)
    if(!isPasswordValid){
        throw new ApiError(409,"Password not valid")

    }
    
    const {accessToken, refreshToken}= await generateAccessAndRefreshToken(user._id)
    
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly : true,
        secure : true
    }
    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refershToken",refreshToken,options)
    .json(
        new ApiResponse(
            200, 
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged In Successfully"
        )
    )

})
export {registerUser,loginUser}