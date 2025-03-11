import Joi from "joi";

export const categorySchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(2)
    .max(50)
    .pattern(/^[\p{L}0-9\s]+$/u)
    .required()
    .custom((value, helpers) => {
      const formattedValue = value.replace(/\s+/g, " ").trim();
      if (formattedValue !== value) return helpers.error("string.invalidSpace");
      return formattedValue;
    })
    .messages({
      "string.empty": "Tên danh mục không được để trống",
      "string.min": "Tên danh mục phải có ít nhất 2 ký tự",
      "string.max": "Tên danh mục không được vượt quá 50 ký tự",
      "string.pattern.base": "Tên danh mục chỉ được chứa chữ cái, số và khoảng trắng",
      "string.invalidSpace": "Tên danh mục không được có khoảng trắng thừa",
      "any.required": "Tên danh mục là bắt buộc",
    }),
});
