import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/shortlify`);
        console.log("DB connected successfully")
    } catch (error) {
        console.error("DB connection failed")
    }
}