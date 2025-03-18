import bcrypt from "bcryptjs";
import User from "../models/User.js";
import config from "../config/env.js";

import { EMAIL_VERIFY_TEMPLATE, PASSWORD_RESET_TEMPLATE } from "../mail/emailTemplates.js";
import { generateOtp, verifyOtp } from "./otpService.js";
import sendEmail from "../utils/emailHelper.js";
import { generateAccessToken, generateRefreshToken } from "../utils/jwtGeneral.js";
import errorHandle from "../middlewares/errorMiddleware.js";


// * create user
export const registerUser = async (name, email, password) => {
  let user = await User.findOne({ email });

  if (user) {
    if (user.isAccountVerify) {
      throw new errorHandle(409, "Email đã được đăng ký và xác minh.");
    } else {
      const saltRounds = Number(config.SALT);
      user.name = name;
      user.password = await bcrypt.hash(password, saltRounds);
      await user.save();
    }
  } else {
    const saltRounds = Number(config.SALT);
    const hashPassword = await bcrypt.hash(password, saltRounds);

    user = await User.create({
      name,
      email,
      password: hashPassword,
      loginMethod: "email",
    });
  }

  const otp = await generateOtp(user._id, "verify")

  await sendEmail(
    user.email,
    "Mã OTP xác minh tài khoản",
    EMAIL_VERIFY_TEMPLATE.replace("{{otp}}", otp).replace("{{email}}", email)
  );

  return user
};


// * login user
export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new errorHandle(404, "Người dùng không tồn tại.");
  }

  const validPassword = bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw new errorHandle(401, "Email hoặc mật khẩu không đúng!");
  }

  if (!user.isAccountVerify) {
    throw new errorHandle(403, "Tài khoản của bạn chưa được xác minh. Vui lòng xác minh email trước khi đăng nhập.");
  }

  const access_token = generateAccessToken({ id: user._id, role: user.role });
  const refresh_token = generateRefreshToken({ id: user._id, role: user.role });

  return { access_token, refresh_token };
};


export const getUserProfile = async (userId) => {
  const user = await User.findById(userId).select("-password")
  if (!user) {
    throw new errorHandle(404, "Tài khoản người dùng không tồn tại!");
  }
  return user
}

// * verify account
export const verifyAccount = async (email, otp) => {
  await verifyOtp(email, otp, "verify")

  const user = await User.findOne({ email });

  if (user.isAccountVerify) {
    throw new errorHandle(400, "Tài khoản đã được xác minh trước đó!");
  }

  user.isAccountVerify = true;
  await user.save();

  const access_token = generateAccessToken({ id: user._id, role: user.role });
  const refresh_token = generateRefreshToken({ id: user._id, role: user.role });

  return { access_token, refresh_token };
};


// * send otp reset
export const sendOtpReset = async (email) => {
  const user = await User.findOne({ email })
  if (!user) {
    throw new errorHandle(404, "Người dùng không tồn tại.");
  }

  const otp = await generateOtp(user._id, "reset")

  await sendEmail(
    email,
    "Mã OTP reset mật khẩu",
    PASSWORD_RESET_TEMPLATE.replace("{{otp}}", otp).replace("{{email}}", { email: user.email })
  );
};




export const resetOtpPassword = async (email, otp, newPassword) => {
  await verifyOtp(email, otp, "reset")

  const user = await User.findOne({ email });

  const isSamePassword = await bcrypt.compare(newPassword, user.password);
  if (isSamePassword) {
    throw new Error("Mật khẩu mới không được giống mật khẩu cũ.");
  }

  const hashNewPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashNewPassword;
  await user.save();
};

