import config from "../config/env.js";
import { loginUser, registerUser, resetOtpPassword, sendOtpReset, verifyAccount } from "../services/authService.js";


const isProduction = config.NODE_ENV === "production";



// * create user
export const registerUserController = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ success: false, message: "Vui lòng nhập đầy đủ thông tin đăng ký!" });
    }

    const emailNormalized = email.trim().toLowerCase();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailNormalized)) {
      return res.status(400).json({ success: false, message: "Địa chỉ email không hợp lệ!" });
    }


    if (password !== confirmPassword) {
      return res.status(400).json({ success: false, message: "Mật khẩu nhập lại không khớp!" });
    }

    await registerUser(name, emailNormalized, password);

    return res.status(201).json({
      success: true,
      message: "Mã OTP đã được gửi. Vui lòng kiểm tra email để xác minh tài khoản."
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Lỗi máy chủ",
    });
  }
};


// * login user
export const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Vui lòng nhập email và mật khẩu!" });
    }

    const { access_token, refresh_token } = await loginUser(email, password);
    res.cookie("token", refresh_token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ success: true, access_token, message: "Đăng nhập thành công!", });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Lỗi máy chủ",
    });
  }
};


// * verify account
export const verifyEmailController = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ success: false, message: "Thiếu email hoặc OTP!" });
    }

    const { access_token, refresh_token } = await verifyAccount(email, otp);
    res.cookie("token", refresh_token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ success: true, access_token, message: "Xác minh thành công!" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Lỗi máy chủ",
    });
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
