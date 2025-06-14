import bcrypt from "bcryptjs";
import User from "../models/User.js";
import config from "../config/env.js";
import {
  EMAIL_VERIFY_TEMPLATE,
  PASSWORD_RESET_TEMPLATE,
} from "../mail/emailTemplates.js";
import { generateOtp, verifyOtp } from "./otpService.js";
import sendEmail from "../utils/emailHelper.js";
import CustomError from "../utils/customError.js";
import generateTokens from "../utils/jwtHelper.js";

// * create user
export const registerUser = async (name, email, password) => {
  let user = await User.findOne({ email });

  if (user) {
    if (user.isAccountVerify) {
      throw new CustomError(409, "Email đã được đăng ký và xác minh.");
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

  const otp = await generateOtp(user._id, "verify");

  const emailResult = await sendEmail(
    user.email,
    "Mã OTP xác minh tài khoản",
    EMAIL_VERIFY_TEMPLATE.replace("{{otp}}", otp).replace("{{email}}", email)
  );

  if (!emailResult.success) {
    throw new CustomError(500, "Gửi email thất bại. Vui lòng thử lại.");
  }

  return user;
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
    throw new CustomError(
      403,
      "Tài khoản của bạn chưa được xác minh. Vui lòng xác minh email trước khi đăng nhập."
    );
  }

  const { access_token, refresh_token } = generateTokens(user);
  return { access_token, refresh_token };
};

export const googleAuth = async (profile, clientType) => {
  if (!profile.emails || profile.emails.length === 0) {
    throw new CustomError(404, "Không tìm thấy email trong tài khoản Google.");
  }

  const email = profile.emails[0].value;
  let user = await User.findOne({ email });

  if (user) {
    if (user.loginMethod !== "google") {
      throw new CustomError(403, "Tài khoản đã tồn tại với phương thức khác");
    }
  } else {
    user = await User.create({
      email,
      name: profile.displayName || "User google",
      avatar: profile.photos[0].value || "",
      googleId: profile.id,
      isAccountVerify: true,
      loginMethod: "google",
      role: clientType === "admin" ? "admin" : "user",
    });
    await user.save();
  }

  return user;
};

// * verify account
export const verifyAccount = async (email, otp) => {
  await verifyOtp(email, otp, "verify");

  const user = await User.findOne({ email });

  if (user.isAccountVerify) {
    throw new CustomError(400, "Tài khoản đã được xác minh trước đó!");
  }

  user.isAccountVerify = true;
  await user.save();

  const { accessToken, refreshToken } = generateTokens(user);

  return { user, accessToken, refreshToken };
};

// * send otp reset
export const forgotPassword = async (email) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError(404, "Người dùng không tồn tại.");
  }

  const otp = await generateOtp(user._id, "reset");

  const emailResult = await sendEmail(
    email,
    "Mã OTP reset mật khẩu",
    PASSWORD_RESET_TEMPLATE.replace("{{otp}}", otp).replace("{{email}}", {
      email: user.email,
    })
  );

  if (!emailResult.success) {
    throw new CustomError(500, "Gửi email thất bại. Vui lòng thử lại.");
  }
};

export const verifyOtpReset = async (email, otp) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError(404, "Người dùng không tồn tại.");
  }

  await verifyOtp(email, otp, "reset");
};

export const resetOtpPassword = async (email, newPassword) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError(404, "Người dùng không tồn tại.");
  }

  const isSamePassword = await bcrypt.compare(newPassword, user.password);
  if (isSamePassword) {
    throw new CustomError(400, "Mật khẩu mới không được giống mật khẩu cũ.");
  }

  const hashNewPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashNewPassword;
  await user.save();
};
