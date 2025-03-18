import config from "../config/env.js";
import {
  forgotPassword,
  getUserProfile,
  loginUser,
  registerUser,
  resetOtpPassword,
  verifyAccount,
  verifyOtpReset
} from "../services/authService.js";
import { verifyRefreshToken } from "../services/jwtService.js";
import { setRefreshTokenCookie } from "../utils/cookieHelper.js";

const isProduction = config.NODE_ENV === "production";


// * login user
export const loginUserController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { access_token, refresh_token } = await loginUser(email, password);

    setRefreshTokenCookie(res, refresh_token);

    return res.status(200).json({ success: true, access_token, message: "Đăng nhập thành công!", });
  } catch (error) {
    next(error);
  }
};


// * create user
export const registerUserController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const result = await registerUser(name, email, password);

    return res.status(201).json({
      success: true,
      email: result.email,
      message: "Mã OTP đã được gửi. Vui lòng kiểm tra email để xác minh tài khoản."
    });
  } catch (error) {
    next(error);
  }
};


// * verify account
export const verifyAccountController = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    const { access_token, refresh_token } = await verifyAccount(email, otp);

    setRefreshTokenCookie(res, refresh_token)

    return res.status(200).json({ success: true, access_token, message: "Xác minh tài khoản thành công!" });
  } catch (error) {
    next(error)
  }
};


// *get current user
export const getUserProfileController = async (req, res, next) => {
  try {
    const userId = req.user.id

    const result = await getUserProfile(userId);

    return res.status(200).json({ success: true, data: result, message: "Lấy thông tin người dùng thành công!" });
  } catch (error) {
    next(error)
  }
};


//* Send email otp reset password
export const forgetPasswordController = async (req, res, next) => {
  try {
    const { email } = req.body
    await forgotPassword(email)
    return res.status(200).json({ success: true, step: 2, message: "Otp reset mật khẩu đã được gửi!" })
  } catch (error) {
    next(error)
  }
}

//* verify  otp reset password
export const verifyOtpResetController = async (req, res, next) => {
  try {
    const { email, otp } = req.body
    await verifyOtpReset(email, otp)
    return res.status(200).json({ success: true, step: 3, message: "Xác nhận otp thành công" })
  } catch (error) {
    next(error)
  }
}


//* Reset password action.
export const resetPasswordController = async (req, res, next) => {
  try {
    const { email, otp, newPassword } = req.body

    await resetOtpPassword(email, otp, newPassword)

    return res.status(200).json({ success: true, message: "Mật khẩu đã được đặt lại thành công!" })
  } catch (error) {
    next(error)
  }
}


// * refresh token
export const refreshTokenController = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refresh_token;
    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Không tìm thấy Refresh Token. Vui lòng đăng nhập lại!",
      });
    }

    const newAccessToken = await verifyRefreshToken(refreshToken);
    return res.status(200).json({
      success: true,
      access_token: newAccessToken,
      message: "Cấp lại Access Token thành công!",
    });
  } catch (error) {
    next(error)
  }
}


// * logout
export const logoutController = async (req, res, next) => {
  try {
    res.clearCookie('refresh_token', {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "strict",
    })
    return res.status(200).json({ success: true, message: "Đăng xuất thành công!" })
  } catch (error) {
    next(error)
  }
}
