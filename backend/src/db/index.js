import mongoose from 'mongoose'
import { DB_NAME } from '../../constence.js'

const connectDB = async ()=>{
    try {
        const mongodbConnect = await mongoose.connect(`${process.env.MONODBURI}/${DB_NAME}`)
        console.log(`Mongodb connected DB host : ${mongodbConnect.connection.host}`);
        
    } catch (error) {
        console.log("MongoDB connction error",error);
        exit(1)
        
    }
}
export default connectDB
