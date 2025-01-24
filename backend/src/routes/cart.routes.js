import { Router } from "express";
import {getCart, addToCart ,deleteItem} from '../controllers/cart.contoller.js'
import {verifyJWT} from '../middleware/auth.middileware.js'
const router = Router()
router.route('/getcart').post(verifyJWT,getCart)
router.route('/addtocart').post(verifyJWT,addToCart)
router.route('/deleteitem').post(verifyJWT,deleteItem)
export default router