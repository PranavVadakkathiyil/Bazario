import { Router } from "express";
import {OrderInCash,orderInRazorpay,getUserOrders} from '../controllers/order.contoller.js'
import {verifyJWT} from '../middleware/auth.middileware.js'
const router = Router()
router.route('/getallorders').post(verifyJWT,getUserOrders)
router.route('/orderinrazorpay').post(verifyJWT,orderInRazorpay)
router.route('/orderincash').post(verifyJWT,OrderInCash)
export default router