import {Router} from 'express'
import {registerUser,loginUser} from '../controllers/user.controller.js'
import {upload} from '../middleware/multer.middleware.js'
import verifyJWT from '../middleware/auth.middileware.js'
const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        }
    ]),
    registerUser
)
router.route("/login").post(loginUser)
export default router