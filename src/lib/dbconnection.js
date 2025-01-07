import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("db connected successfully");
    return connection; // Return the connection for debugging or further usage
  } catch (err) {
    console.log("db connection error");
    throw new Error("Failed to connect to the database");
  }
};
