import mongoose from "mongoose";

const connectionString = process.env.NODE_ENV === "production" ? process.env.MONGODB_PROD_URI : 'mongodb://localhost:27017/isecure-auth';

export const connectDB = async () => {
    await mongoose.connect(connectionString);
    console.log(`Connected to mongodb !! ${mongoose.connections[0].host}`)
}

