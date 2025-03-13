import { loginUser, registerUser, resetOtpPassword, sendOtpReset, verifyAccount } from "../services/authService.js";
import { verifyRefreshToken } from "../services/jwtService.js";
import { setRefreshTokenCookie } from "../utils/cookieHelper.js";



// * create user
export const registerUserController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    await registerUser(name, email, password);

    return res.status(201).json({
      success: true,
      message: "Mã OTP đã được gửi. Vui lòng kiểm tra email để xác minh tài khoản."
    });
  } catch (error) {
    next(error);
  }
};


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


// *get current user
export const getCurrentUserController = async (req, res, next) => {
  try {
    const result = await verifyAccount(email, otp);

    return res.status(200).json({ success: true, user: result, message: "Lấy thông tin người dùng thành công!" });
  } catch (error) {
    next(error)
  }
};


// * verify account
export const verifyEmailController = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    const { access_token, refresh_token } = await verifyAccount(email, otp);

    setRefreshTokenCookie(res, refresh_token)

    return res.status(200).json({ success: true, access_token, message: "Xác minh tài khoản thành công!" });
  } catch (error) {
    next(error)
  }
};


//* Send email otp reset password
export const sendResetOtpController = async (req, res, next) => {
  try {
    const { email } = req.body
    await sendOtpReset(email)
    return res.status(200).json({ success: true, message: "Otp reset mật khẩu đã được gửi!" })
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
    const refreshToken = req.cookies.token;
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
    res.clearCookie('token', {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "strict",
    })
    return res.status(200).json({ success: true, message: "Đăng xuất thành công!" })
  } catch (error) {
    next(error)
  }
}
