import mongoose,{Schema} from 'mongoose'

const productSchema = new Schema({
    productName :{
        type:String,
        required:true,
        index:true
    },
    description:{
        type:String,
        required:true,

    },
    image:{ 
        type:[Array],
        required:true,
    },
    price:{
        type:Number,
        required:true,

    },
    Measurement:{
        type:[String],
        required:true
    },
    mainCategory:{
        type:String,
        required:true,
    },
    Category:{
        type:String,
        required:true,
    },
    SubCategory:{
        type:String,
        required:true,
    },
    Store:{
        type:Schema.Types.ObjectId,
        ref:"Store"
    }
    


},{timestamps:true})

export const Product = mongoose.model("Product",productSchema)