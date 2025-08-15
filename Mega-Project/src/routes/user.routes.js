import { Router } from 'express'
import { registerUser } from '../controllers/user.controller.js'

import {upload} from "../middlewares/multer.middleware.js"
const router = Router()

router.route("/register").post( 
    upload.fields([ // this first parameter 'upload.fields' is to upload files by using 'upload' middleware, here we used upload.fields, why not upload.array? ask chatgpt
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)
// router.route("/login").post(login)

export default router