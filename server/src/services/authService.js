import bcrypt from "bcryptjs";
import Otp from "../models/Otp.js";
import User from "../models/User.js";
import config from "../config/env.js";
import sendEmail from "../utils/sendEmail.js";
import CustomError from "../utils/customError.js";
import { EMAIL_VERIFY_TEMPLATE, PASSWORD_RESET_TEMPLATE } from "../mail/emailTemplates.js";
import { generateAccessToken, generateRefreshToken } from "../config/jwtUtils.js";


// * create user
export const registerUser = async (name, email, password) => {
  let user = await User.findOne({ email });

  if (user) {
    if (user.isAccountVerify) {
      throw new CustomError("Email đã được đăng ký và xác minh.");
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

  await Otp.deleteMany({ userId: user._id, type: "verify" });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  await Otp.create({ userId: user._id, otp, type: "verify" });

  await sendEmail(
    email,
    "Mã OTP xác minh tài khoản",
    EMAIL_VERIFY_TEMPLATE.replace("{{otp}}", otp).replace("{{email}}", email)
  );
};


// * login user
export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError(404, "Người dùng không tồn tại.");
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw new CustomError(401, "Email hoặc mật khẩu không đúng!");
  }

  if (!user.isAccountVerify) {
    throw new CustomError(403, "Tài khoản của bạn chưa được xác minh. Vui lòng xác minh email trước khi đăng nhập.");
  }

  const access_token = generateAccessToken({ id: user._id, isAdmin: user.role === "admin" });
  const refresh_token = generateRefreshToken({ id: user._id, isAdmin: user.role === "admin" });

  return { access_token, refresh_token };
};


// * verify account
export const verifyAccount = async (email, otpCode) => {

  const user = await User.findOne({ email })
  if (!user) {
    throw new CustomError("Người dùng không tồn tại!");
  }

  if (user.isAccountVerify) {
    throw new CustomError("Tài khoản đã được xác minh trước đó!");
  }

  const otp = await Otp.findOne({ userId: user._id, otp: otpCode, type: "verify" });
  if (!otp) {
    throw new CustomError("OTP không hợp lệ hoặc đã hết hạn!");
  }

  user.isAccountVerify = true;
  await user.save();

  await Otp.deleteOne({ _id: otp._id });

  const access_token = generateAccessToken({ id: user._id, isAdmin: false });
  const refresh_token = generateRefreshToken({ id: user._id, isAdmin: false });

  return { access_token, refresh_token };
};


// * send otp reset
export const sendOtpReset = async (email) => {
  const user = await User.findOne({ email })
  if (!user) {
    throw new Error("Người dùng không tồn tại.");
  }

  await Otp.deleteMany({ userId: user._id, type: "reset" });

  const otp = String(Math.floor(100000 + Math.random() * 900000))
  await Otp.create({ userId: user._id, otp, type: "reset" })

  await sendEmail(
    email,
    "Mã OTP reset mật khẩu",
    PASSWORD_RESET_TEMPLATE.replace("{{otp}}", otp).replace("{{email}}", { email: user.email })
  );
};




export const resetOtpPassword = async (email, otpCode, newPassword) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Người dùng không tồn tại.");
  }

  const otp = await Otp.findOne({ userId: user._id, otp: otpCode });
  if (!otp) {
    throw new Error("OTP không hợp lệ hoặc đã hết hạn.");
  }

  const isSamePassword = await bcrypt.compare(newPassword, user.password);
  if (isSamePassword) {
    throw new Error("Mật khẩu mới không được giống mật khẩu cũ.");
  }

  const hashNewPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashNewPassword;
  await user.save();

  await Otp.deleteOne({ _id: otp._id });
};

