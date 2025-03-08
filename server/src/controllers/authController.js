import config from "../config/env.js";
import { loginUser, registerUser, resetOtpPassword, sendOtpReset, verifyAccount } from "../services/authService.js";


const isProduction = config.NODE_ENV === "production";



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

    res.cookie("token", refresh_token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ success: true, access_token, message: "Đăng nhập thành công!", });
  } catch (error) {
    next(error);
  }
};


// * verify account
export const verifyEmailController = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    const { access_token, refresh_token } = await verifyAccount(email, otp);
    res.cookie("token", refresh_token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ success: true, access_token, message: "Xác minh tài khoản thành công!" });
  } catch (error) {
    next()
  }
};



//* Send email otp reset password
export const sendResetOtpController = async (req, res) => {
  try {
    const { email } = req.body
    if (!email) {
      return res.status(400).json({ success: false, message: "Thiếu địa chỉ email!" })
    }

    await sendOtpReset(email)
    return res.status(200).json({ success: true, message: "Otp reset mật khẩu đã được gửi!" })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Lỗi máy chủ",
    });
  }
}


//* Reset password action.
export const resetPasswordController = async (req, res) => {
  try {
    const { email, otp, newPassword, comfirnNewPassword } = req.body

    if (!email || !otp || !newPassword || !comfirnNewPassword) {
      return res.status(400).json({ success: false, message: "Thiếu dữ liệu" });
    }

    if (newPassword !== comfirnNewPassword) {
      return res.status(400).json({ success: false, message: "Mật khẩu không khớp" })
    }

    await resetOtpPassword(email, otp, newPassword)

    return res.status(200).json({ success: true, message: "Mật khẩu đã được đặt lại thành công!" })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Lỗi máy chủ",
    });
  }
}



// * refresh token
export const refreshTokenController = async (req, res) => {
  try {
    const refreshToken = req.cookies.token;
    console.log("re token", refreshToken)
    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Refresh token is required",
      });
    }
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, user) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: "Invalid or expired refresh token",
        });
      }
      const { id, isAdmin } = user
      const access_token = genneralAccessToken({ id, isAdmin })
      return res.status(200).json({ success: true, access_token, message: "Refresh token success!" })
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Lỗi máy chủ",
    });
  }
}



// * logout
export const logoutController = async (req, res) => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "strict",
    })
    return res.status(200).json({ success: true, message: "Đăng xuất thành công!" })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Lỗi máy chủ",
    })
  }
}
