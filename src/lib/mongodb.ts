import mongoose from "mongoose";

export const connectMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("- Connected to MONGO DB")
    } catch (e) {
        console.log("Error connecting to db: ", e)
    }
}