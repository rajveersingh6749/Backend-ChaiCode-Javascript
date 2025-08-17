import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { User } from '../models/user.model.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'
import { ApiResponse } from '../utils/ApiResponse.js'

const registerUser = asyncHandler( async (req, res) => {
    // res.status(200).json({
    //     messege: "Chai Aur Code"
    // })

    // now we want to register user and for that:
    // steps:
    // take user details from frontend
    // validation - not empty
    // check if user already exits: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // check if actully user created or not and if yes then remove password and refresh token field from response
    // check for user creation 
    // if yes then return response

    const {fullName, email, username, password} = req.body // to test from postman go to body->raw and then json and write {"email":"", "password":""}
    // console.log("Testing email through Postman!: ", email) // for testing from 'postman'
    // console.log("This is how req.body looks like!: ", req.body)

    if(
        [fullName, email, username, password].some((field) => field?.trim() === "") // it is an advanced code of 'if' to check validation of all the fields
    ){
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({ // User can directly talk to database so here it is asking database if username or email already existed
        $or: [{ username }, { email }]
    })

    if(existedUser){
        throw new ApiError(409,"User with email or username already exists")
    }

    // console.log("This is how req.files look like!: ", req.files)
    const avatarLocalPath = req.files?.avatar[0]?.path
    // const coverImageLocalPath = req.files?.coverImage[0]?.path

    let coverImageLocalPath;
    if(req.files && Array.isArray(req.files.coverImage) &&  req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path;
    }

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(400, "Avatar file is required")
    }

    const user = await User.create({
        fullName,
        username: username.toLowerCase(),
        email,
        password,
        avatar: avatar.url,
        coverImage: coverImage?.url || ""
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user")
    }


    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    )
})


export { registerUser }