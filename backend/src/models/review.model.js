import mongoose,{Schema} from 'mongoose'
const reviewSchema = new Schema({
        product:{
            type: Schema.Types.ObjectId,
            ref:"Product",
            required:true
        },
        user:{
            type:Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        rating:{
            type:Number,
            min:1,
            max:5,
            required:true
        },
        comment:{
            type:String,
            required:true
        }
}, { timestamps: true })
export const Review = mongoose.Schema("Review",reviewSchema)