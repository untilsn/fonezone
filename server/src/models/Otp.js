import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  otp: { type: String, required: true },
  type: { type: String, enum: ["verify", "reset"], required: true },
  expireAt: { type: Date, default: Date.now, expires: 300 }
})

const Otp = mongoose.model("Otp", otpSchema)

export default Otp