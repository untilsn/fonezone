import Joi from "joi";

export const couponValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().trim().required().messages({
      "string.empty": "Tên mã giảm giá không được để trống.",
      "any.required": "Tên mã giảm giá là bắt buộc.",
    }),
    code: Joi.string().trim().uppercase().required().messages({
      "string.empty": "Mã giảm giá không được để trống.",
      "any.required": "Mã giảm giá là bắt buộc.",
    }),
    discountPercent: Joi.number().min(1).max(100).required().messages({
      "number.min": "Phần trăm giảm giá phải lớn hơn hoặc bằng 1%.",
      "number.max": "Phần trăm giảm giá không thể vượt quá 100%.",
      "any.required": "Phần trăm giảm giá là bắt buộc.",
    }),
    minOrderValue: Joi.number().min(0).default(0).messages({
      "number.min": "Giá trị đơn hàng tối thiểu không được nhỏ hơn 0.",
    }),
    maxDiscount: Joi.number().min(0).allow(null).messages({
      "number.min": "Giảm giá tối đa phải lớn hơn hoặc bằng 0.",
    }),
    expireAt: Joi.date().greater("now").required().messages({
      "date.greater": "Ngày hết hạn phải là một ngày trong tương lai.",
      "any.required": "Ngày hết hạn là bắt buộc.",
    }),
    usageLimit: Joi.number().min(1).default(1).messages({
      "number.min": "Giới hạn sử dụng phải ít nhất là 1 lần.",
    }),
  });

  return schema.validate(data, { abortEarly: false });
};
