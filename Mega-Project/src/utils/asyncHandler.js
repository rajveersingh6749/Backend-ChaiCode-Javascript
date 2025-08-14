// --SECOND WAY--
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler}



// --FIRST WAY--

// this is higher order function(read in javascript)-> these functions can take another functions as an argument and can also return a function
// so the function that i've written below has meaning like:
//  asyncHandler = () => {}  suppose we've this function
// asyncHandler = (fn) => {} // passed function as an argument
// asyncHandler = (fn) => {() => {}} // further passed this in another function

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false, 
//             messege: err.messege
//         })
//     }
// } 