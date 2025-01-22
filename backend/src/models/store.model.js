import mongoose,{Schema} from 'mongoose'

const storeSchema = new Schema({
    StoreName:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    products:[
        {
            type:Schema.Types.ObjectId,
            ref:"Product"
        }
    ],
    status: {
        type: String,
        enum: ['active', 'banned'],
        default: 'active',
    }
}, { timestamps: true })

const Store = mongoose.Schema("Store",storeSchema)