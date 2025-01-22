import mongoose,{Schema} from "mongoose";
const StoreorderSchema = new Schema({
    Store:{
        type:Schema.Types.ObjectId,
        ref:"Store"
    },
    orders:[
        {
            product:{
                type:Schema.Types.ObjectId,
                ref:"Product"
            },
            paymentMode:{
                type: String,
                enum: ['pending','cod','online'],
                default: 'pending',
            },
            buyer:{
                type:Schema.Types.ObjectId,
                ref:"User"
            }
        }
    ]
})
export const StoreOrder = mongoose.Schema("StoreOrder",StoreorderSchema)