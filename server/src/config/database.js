import mongoose from "mongoose"
import dotenv from "dotenv"
import config from "./env.js"
dotenv.config()

const connectDB = async () => {
  await mongoose.connect(config.MONGO_DB)
  console.log("connect db success!")
}

export default connectDB