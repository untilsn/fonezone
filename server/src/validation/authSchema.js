import Joi from "joi";

// Schema xác thực đăng ký (Register)
export const registerSchema = Joi.object({
  name: Joi.string().trim().min(2).max(15).required().messages({
    "string.empty": "Tên không được để trống",
    "string.min": "Tên phải có ít nhất 2 ký tự",
    "string.max": "Tên không được vượt quá 15 ký tự",
    "any.required": "Tên là bắt buộc",
  }),
  email: Joi.string().email().trim().required().messages({
    "string.email": "Email không hợp lệ",
    "string.empty": "Email không được để trống",
    "any.required": "Email là bắt buộc",
  }),
  password: Joi.string().min(6).max(20).required().messages({
    "string.empty": "Mật khẩu không được để trống",
    "string.min": "Mật khẩu phải có ít nhất 6 ký tự",
    "string.max": "Mật khẩu không được vượt quá 20 ký tự",
    "any.required": "Mật khẩu là bắt buộc",
  }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({
      "any.only": "Mật khẩu xác nhận không khớp",
      "string.empty": "Mật khẩu xác nhận không được để trống",
      "any.required": "Mật khẩu xác nhận là bắt buộc",
    }),
});

// Schema xác thực đăng nhập (Login)
export const loginSchema = Joi.object({
  email: Joi.string().email().trim().required().messages({
    "string.email": "Email không hợp lệ",
    "string.empty": "Email không được để trống",
    "any.required": "Email là bắt buộc",
  }),
  password: Joi.string().min(6).max(20).required().messages({
    "string.empty": "Mật khẩu không được để trống",
    "string.min": "Mật khẩu phải có ít nhất 6 ký tự",
    "string.max": "Mật khẩu không được vượt quá 20 ký tự",
    "any.required": "Mật khẩu là bắt buộc",
  }),
});


export const verifyEmailSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } }) // Validate email
    .required()
    .messages({
      "string.empty": "Email không được để trống!",
      "string.email": "Email không hợp lệ!",
      "any.required": "Email là bắt buộc!",
    }),

  otp: Joi.string()
    .length(6)
    .pattern(/^\d{6}$/) 
    .required()
    .messages({
      "string.empty": "OTP không được để trống!",
      "string.length": "OTP phải có 6 chữ số!",
      "string.pattern.base": "OTP chỉ được chứa số!",
      "any.required": "OTP là bắt buộc!",
    }),
});


export const sendResetOtpSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Email không hợp lệ!",
    "any.required": "Thiếu địa chỉ email!",
  }),
});


export const resetPasswordSchema = Joi.object({
  email: Joi.string().email().trim().required().messages({
    "string.email": "Email không hợp lệ",
    "string.empty": "Email không được để trống",
    "any.required": "Email là bắt buộc",
  }),
  otp: Joi.string().length(6).required().messages({
    "string.empty": "Mã OTP không được để trống",
    "string.length": "Mã OTP phải có đúng 6 ký tự",
    "any.required": "Mã OTP là bắt buộc",
  }),
  newPassword: Joi.string().min(6).max(20).required().messages({
    "string.empty": "Mật khẩu mới không được để trống",
    "string.min": "Mật khẩu mới phải có ít nhất 6 ký tự",
    "string.max": "Mật khẩu mới không được vượt quá 20 ký tự",
    "any.required": "Mật khẩu mới là bắt buộc",
  }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("newPassword"))
    .required()
    .messages({
      "any.only": "Mật khẩu xác nhận không khớp với mật khẩu mới",
      "string.empty": "Mật khẩu xác nhận không được để trống",
      "any.required": "Mật khẩu xác nhận là bắt buộc",
    }),
});
