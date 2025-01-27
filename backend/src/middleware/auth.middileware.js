import jwt from 'jsonwebtoken'
import  ApiError  from '../utils/ApiError.js'
import { User } from '../models/user.model.js'
import  asyncHandler  from '../utils/asyncHandler.js'

export const verifyJWT = asyncHandler(async(req, _,next)=>{
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","") 
        if(!token){
            throw new ApiError(401, "Unauthorized");
        }
        const decodeToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRTE)
        const user = await User.findById(decodeToken._id)
        if(!user){
            throw new ApiError(401, "InvalidToken");
        }
        req.user= user
        
        next()
    } catch (error) {
        console.log(error);
        
        throw new ApiError(401,error?.message || "InvalidAccessToken");
    }
    
})

export default verifyJWT