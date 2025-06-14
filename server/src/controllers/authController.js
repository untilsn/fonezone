import passport from "../config/passport.js";
import config from "../config/env.js";
import {
  forgotPassword,
  loginUser,
  registerUser,
  resetOtpPassword,
  verifyAccount,
  verifyOtpReset,
} from "../services/authService.js";
import { verifyRefreshToken } from "../services/jwtService.js";
import { setRefreshTokenCookie } from "../utils/cookieHelper.js";
// import handleGoogleAuthError from "../middlewares/googleAuthError.js";
import generateTokens from "../utils/jwtHelper.js";

const isProduction = config.NODE_ENV === "production";

// * login user
export const loginUserController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { access_token, refresh_token } = await loginUser(email, password);

    setRefreshTokenCookie(res, refresh_token);

    return res
      .status(200)
      .json({ success: true, access_token, message: "Đăng nhập thành công!" });
  } catch (error) {
    next(error);
  }
};

export const googleAuthController = {
  handleGoogleCallback: (req, res, next) => {
    passport.authenticate(
      "google",
      { session: false },
      async (err, user, info) => {
        // Lấy clientType từ state parameter
        const clientType = req.query.state || "user";
        const redirectBase =
          clientType === "admin" ? config.ADMIN_URL : config.CLIENT_URL;

        try {
          if (err) {
            return handleGoogleAuthError(err, req, res, clientType);
          }
          if (!user) {
            return res.redirect(
              `${redirectBase}/login-fail?error=authentication_failed`
            );
          }

          console.log(user, "user");
          const { access_token, refresh_token } = await generateTokens(user);
          setRefreshTokenCookie(res, refresh_token);
          console.log(access_token, "ac");

          return res.redirect(
            `${redirectBase}/login-success?access_token=${access_token}`
          );
        } catch (err) {
          return handleGoogleAuthError(err, req, res, clientType);
        }
      }
    )(req, res, next);
  },
};

// Cập nhật handleGoogleAuthError
const handleGoogleAuthError = (err, req, res, clientType = "user") => {
  const redirectBase =
    clientType === "admin" ? config.ADMIN_URL : config.CLIENT_URL;
  console.log(err.message);
  return res.redirect(
    `${redirectBase}/login-fail?error=${encodeURIComponent(err.message)}`
  );
};

// * create user
export const registerUserController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const result = await registerUser(name, email, password);

    return res.status(201).json({
      success: true,
      email: result.email,
      message:
        "Mã OTP đã được gửi. Vui lòng kiểm tra email để xác minh tài khoản.",
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

    setRefreshTokenCookie(res, refresh_token);

    return res.status(200).json({
      success: true,
      access_token,
      message: "Xác minh tài khoản thành công!",
    });
  } catch (error) {
    next(error);
  }
};

//* Send email otp reset password
export const forgetPasswordController = async (req, res, next) => {
  try {
    const { email } = req.body;
    await forgotPassword(email);
    return res.status(200).json({
      success: true,
      step: 2,
      message: "Otp reset mật khẩu đã được gửi!",
    });
  } catch (error) {
    next(error);
  }
};

//* verify  otp reset password
export const verifyOtpResetController = async (req, res, next) => {
  try {
    const { email, otp } = req.body;
    await verifyOtpReset(email, otp);
    return res
      .status(200)
      .json({ success: true, step: 3, message: "Xác nhận otp thành công" });
  } catch (error) {
    next(error);
  }
};

//* Reset password action.
export const resetPasswordController = async (req, res, next) => {
  try {
    const { email, newPassword } = req.body;

    await resetOtpPassword(email, newPassword);

    return res
      .status(200)
      .json({ success: true, message: "Mật khẩu đã được đặt lại thành công!" });
  } catch (error) {
    next(error);
  }
};

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
    next(error);
  }
};

// * logout
export const logoutController = async (req, res, next) => {
  try {
    res.clearCookie("refresh_token", {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "strict",
    });
    return res
      .status(200)
      .json({ success: true, message: "Đăng xuất thành công!" });
  } catch (error) {
    next(error);
  }
};
