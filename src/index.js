import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js"

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.error("Error: ", error);
        throw error
    })

    const port_id = process.env.PORT || 8000

    app.listen(port_id, () => {
        console.log(`App is listening on port: ${[port_id]}`);
    })
})
.catch((error) => {
    console.log("MongoDB connection failed with error: ", error)
})













/*  First Approach code

import express from 'express';

const app = express()

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
        app.on("error", (error) => {
            console.error("Error: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port: ${process.env.PORT}`);
        })
    }
    catch(error) {
        console.error("Error: ", error)
        throw error
    }
})()

*/
