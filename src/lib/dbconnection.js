import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export const connectToDB = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected.");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      // Mongoose no longer needs the following options
      // useNewUrlParser: true, // This is deprecated in MongoDB driver 4.x
      // useUnifiedTopology: true, // This is deprecated in MongoDB driver 4.x
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("MongoDB connected successfully.");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);

    // Customize error message depending on the error type
    if (err instanceof mongoose.Error) {
      throw new Error("Failed to connect to the database. Please try again later.");
    } else if (err.code === "ECONNREFUSED") {
      throw new Error("Database connection was refused. Please check the MongoDB server.");
    } else if (err.code === "ENOTFOUND") {
      throw new Error("Database server not found. Please check the server URL.");
    } else {
      throw new Error("An unknown error occurred while connecting to the database.");
    }
  }
};
