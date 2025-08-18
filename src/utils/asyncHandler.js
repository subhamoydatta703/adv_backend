// const asyncHandler = (func) => ()=>{}

// approach 2 of wrapping:
const asyncHandler = (requestHandler)=>{
   return (req, res,next)=>{
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }











//approach 1 of wrapping:
// const asyncHandler = (func) => async (req, res, next)=>{
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: true,
//             message: error.message
//         })
        
//     }
// }