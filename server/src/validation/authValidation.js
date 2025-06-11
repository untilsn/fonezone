import Joi from "joi";

// Validation xác thực đăng ký (Register)
export const registerValidation = Joi.object({
  name: Joi.string().trim().min(2).max(24).required().messages({
    "string.empty": "Tên không được để trống",
    "string.min": "Tên phải có ít nhất 2 ký tự",
    "string.max": "Tên không được vượt quá 24 ký tự",
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
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only": "Mật khẩu xác nhận không khớp",
    "string.empty": "Mật khẩu xác nhận không được để trống",
    "any.required": "Mật khẩu xác nhận là bắt buộc",
  }),
});

// Validation xác thực đăng nhập (Login)
export const loginValidation = Joi.object({
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

export const verifyAccountValidation = Joi.object({
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

export const forgotPasswordValidation = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Email không hợp lệ",
    "any.required": "Email là bắt buộc",
  }),
});

export const verifyOtpValidation = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Email không hợp lệ",
    "any.required": "Email là bắt buộc",
  }),
  otp: Joi.string().length(6).pattern(/^\d+$/).required().messages({
    "string.length": "OTP phải có 6 chữ số",
    "string.pattern.base": "OTP chỉ được chứa số",
    "any.required": "OTP là bắt buộc",
  }),
});

export const resetPasswordValidation = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Email không hợp lệ",
    "any.required": "Email là bắt buộc",
  }),
  newPassword: Joi.string().min(8).max(32).required().messages({
    "string.min": "Mật khẩu phải có ít nhất 8 ký tự",
    "string.max": "Mật khẩu không được quá 32 ký tự",
    "any.required": "Mật khẩu mới là bắt buộc",
  }),
  confirmNewPassword: Joi.string().valid(Joi.ref("newPassword")).messages({
    "any.only": "Mật khẩu xác nhận không khớp",
    "any.required": "Xác nhận mật khẩu là bắt buộc",
  }),
});
