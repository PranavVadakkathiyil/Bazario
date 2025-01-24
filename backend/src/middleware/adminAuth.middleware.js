import jwt from 'jsonwebtoken'
import asyncHandler from '../utils/asyncHandler.js'
import { User } from '../models/user.model.js';
const adminAuth = asyncHandler(async(req,_,next)=>{
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","") 
        if(!token){
            throw new ApiError(401, "Unauthorized");
        }
        const decodeToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRTE)
        const user = await User.findById(decodeToken._id)
        if(!user){
            throw new ApiError(401, "InvalidToken");
        }
        if(user.username !== process.env.ADMIN_USERNAME && user.email !== process.env.ADMIN_EMAIL){
            throw new ApiError(409, "Not Authorized As Admin");
        }
        next()
})
export {adminAuth}