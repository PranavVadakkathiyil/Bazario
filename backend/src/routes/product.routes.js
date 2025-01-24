import Router from 'express'
import {addProduct, editProduct, getSingleProduct, deleteProduct} from '../controllers/product.contoller.js'
import { upload } from '../middleware/multer.middleware.js'
import {adminAuth} from '../middleware/adminAuth.middleware.js'
const router = Router()

router.route('/addproduct').post(adminAuth,upload.fields([
    {
        name:"image1",
            maxCount:1
    },
    {
        name:"image2",
            maxCount:1
    },
    {
        name:"image3",
            maxCount:1
    },
    {
        name:"image4",
            maxCount:1
    },


]),addProduct)
router.route('/editproduct').post(adminAuth,upload.fields([
    {
        name:"image1",
            maxCount:1
    },
    {
        name:"image2",
            maxCount:1
    },
    {
        name:"image3",
            maxCount:1
    },
    {
        name:"image4",
            maxCount:1
    },


]),editProduct)
router.route('/singleproduct').post(getSingleProduct)
router.route('/deleteproduct').post(adminAuth,deleteProduct)
export default router