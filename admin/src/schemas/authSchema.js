import * as yup from "yup";

/**
 * 📥 Schema cho form đăng nhập
 */
export const loginSchema = yup.object({
  email: yup
    .string()
    .required("Vui lòng nhập địa chỉ email")
    .email("Email không hợp lệ"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự"),
});

/**
 * 🔐 Schema cho bước quên mật khẩu (email gửi OTP)
 */
export const forgetPasswordSchema = yup.object({
  email: yup
    .string()
    .required("Vui lòng nhập địa chỉ email")
    .email("Email không hợp lệ"),
});

/**
 * 🔢 Schema cho bước nhập mã OTP
 */
export const otpSchema = yup.object({
  otp: yup
    .string()
    .required("Vui lòng nhập mã OTP")
    .length(6, "OTP phải có đúng 6 chữ số")
    .matches(/^\d{6}$/, "OTP chỉ được chứa số"),
});

/**
 * 🔁 Schema cho bước đặt lại mật khẩu mới (sau OTP)
 */
export const resetPasswordSchema = yup.object({
  email: yup
    .string()
    .required("Thiếu email để xác minh")
    .email("Email không hợp lệ"),

  newPassword: yup
    .string()
    .required("Vui lòng nhập mật khẩu mới")
    .min(8, "Mật khẩu mới phải có ít nhất 8 ký tự"),

  confirmNewPassword: yup
    .string()
    .required("Vui lòng xác nhận mật khẩu mới")
    .oneOf([yup.ref("newPassword"), null], "Mật khẩu xác nhận không khớp"),
});
