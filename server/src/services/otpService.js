import errorHandle from "../middlewares/errorMiddleware.js";
import Otp from "../models/Otp.js";
import User from "../models/User.js"


export const generateOtp = async (userId, type) => {
  await Otp.deleteMany({ userId, type })

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  await Otp.create({ userId, otp, type })

  return otp
}

export const verifyOtp = async (email, otpCode, type) => {
  const user = await User.findOne({ email })
  if (!user) {
    throw new errorHandle(404, "Người dùng không tồn tại!");
  }

  const otp = await Otp.findOne({ userId: user._id, otp: otpCode, type })
  if (!otp) {
    throw new errorHandle(400, "OTP không hợp lệ hoặc đã hết hạn!");
  }

  await otp.deleteOne();
  return true;
}

