import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
import dotenv from 'dotenv';
dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
console.log(process.env.CLOUDINARY_NAME,process.env.CLOUDINARY_API_KEY,process.env.CLOUDINARY_API_KEY);






const uploadToCloudinary = async (localFilePath) => {
    console.log(localFilePath,"cloudin");
    try {
        console.log(localFilePath,"cloudin");
        
        
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:'auto'
        })
        console.log("file uploaded to cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response
        
        
    } catch (error) {
       console.log(error);
      console.log('cach in cloudinary');
       
       
        //console.log( localFilePath,"dff");

        
        fs.unlinkSync(localFilePath)
        //console.log( localFilePath,"dff");

        //return null
    }
}
export { uploadToCloudinary } 