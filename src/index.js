import connectDB from "./db/index.js";
import dotenv from 'dotenv';

dotenv.config({
    path: "./env"
})
connectDB()









// Apporach 1:
// import express from "express";

// const app = express()
// ( async ()=>{
//     try {
//       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//       app.on("error", (error)=>{
//         console.log("Error: ", error)
//         throw error
//       })
//       app.listen(process.env.PORT, ()=>{
//         console.log(`App is listening on port ${process.env.PORT}`);
        
//       })
//     } catch (error) {
//         console.error("Error: ", error)
//         throw error
//     }
// })()