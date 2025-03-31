import Joi from "joi";

export const updateUserValidation = Joi.object({
  name: Joi.string().min(3).max(50).trim().optional(),
  email: Joi.string().email().trim().optional(),
  avatar: Joi.string().uri().optional(),
  password: Joi.string().min(6).optional(),
  role: Joi.string().valid("user", "admin").optional(),
  googleId: Joi.string().optional(),
  isAccountVerify: Joi.boolean().optional(),
  loginMethod: Joi.string().valid("email", "google").optional(),
  isBanned: Joi.boolean().optional(),
  address: Joi.array().items(
    Joi.object({
      phone: Joi.string().pattern(/^0\d{9}$/).required().messages({
        "string.pattern.base": "Số điện thoại phải bắt đầu bằng số 0 và có 10 chữ số."
      }),
      street: Joi.string().required(),
      ward: Joi.string().required(),
      district: Joi.string().required(),
      city: Joi.string().required(),
      postalCode: Joi.string().optional(),
      isDefault: Joi.boolean().optional(),
    })
  ).optional()
});

export const changePasswordValidation = Joi.object({
  currentPassword: Joi.string().min(6).required().messages({
    "string.empty": "Mật khẩu hiện tại không được bỏ trống.",
    "string.min": "Mật khẩu hiện tại phải có ít nhất 6 ký tự.",
  }),
  newPassword: Joi.string().min(6).required().messages({
    "string.empty": "Mật khẩu mới không được bỏ trống.",
    "string.min": "Mật khẩu mới phải có ít nhất 6 ký tự.",
  }),
  confirmPassword: Joi.any().valid(Joi.ref('newPassword')).required().messages({
    "any.only": "Mật khẩu xác nhận phải khớp với mật khẩu mới.",
  }),
});
