import Joi from "joi";

export const validateFlashsale = (data) => {
  const schema = Joi.object({
    name: Joi.string().trim().min(3).max(100).required().messages({
      "string.empty": "Tên Flash Sale không được để trống.",
      "string.min": "Tên Flash Sale phải có ít nhất 3 ký tự.",
      "string.max": "Tên Flash Sale không được quá 100 ký tự.",
      "any.required": "Tên Flash Sale là bắt buộc.",
    }),

    products: Joi.array()
      .items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).message("ID sản phẩm không hợp lệ."))
      .min(1)
      .required()
      .messages({
        "array.min": "Phải có ít nhất một sản phẩm trong Flash Sale.",
        "any.required": "Danh sách sản phẩm là bắt buộc.",
      }),

    discountPercent: Joi.number().integer().min(1).max(100).required().messages({
      "number.base": "Mức giảm giá phải là số nguyên.",
      "number.min": "Mức giảm giá tối thiểu là 1%.",
      "number.max": "Mức giảm giá tối đa là 100%.",
      "any.required": "Mức giảm giá là bắt buộc.",
    }),

    start: Joi.date().required().messages({
      "date.base": "Ngày bắt đầu phải là định dạng ngày hợp lệ.",
      "any.required": "Ngày bắt đầu là bắt buộc.",
    }),

    end: Joi.date().greater(Joi.ref("start")).required().messages({
      "date.base": "Ngày kết thúc phải là định dạng ngày hợp lệ.",
      "date.greater": "Ngày kết thúc phải sau ngày bắt đầu.",
      "any.required": "Ngày kết thúc là bắt buộc.",
    }),

    status: Joi.string()
      .valid("upcoming", "active", "expired")
      .default("upcoming")
      .messages({
        "any.only": "Trạng thái chỉ có thể là 'upcoming', 'active' hoặc 'expired'.",
      }),
  });

  return schema.validate(data, { abortEarly: false });
};
