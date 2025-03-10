import mongoose from "mongoose"
import config from "./env.js"

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGO_DB);
    console.log("Connect to database success!");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};


export default connectDB