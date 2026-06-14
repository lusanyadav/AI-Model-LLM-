import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected with Database..!")
    } catch (error) {
        console.log("Failed to connect with mongoDB", error);
    }
}