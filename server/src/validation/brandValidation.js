import Joi from "joi";

export const brandValidation = Joi.object({
  name: Joi.string().trim().lowercase().min(2).max(50).required().messages({
    "string.base": "Tên thương hiệu phải là chuỗi ký tự.",
    "string.empty": "Tên thương hiệu không được để trống.",
    "string.min": "Tên thương hiệu phải có ít nhất {#limit} ký tự.",
    "string.max": "Tên thương hiệu không được quá {#limit} ký tự.",
    "any.required": "Tên thương hiệu là bắt buộc.",
  }),

  description: Joi.string().allow("", null).max(400).messages({
    "string.base": "Mô tả phải là chuỗi ký tự.",
    "string.max": "Mô tả không được vượt quá {#limit} ký tự.",
  }),

  isActive: Joi.boolean().messages({
    "boolean.base": "Trạng thái hoạt động phải là true hoặc false.",
  }),
});
