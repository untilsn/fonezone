import Joi from "joi";

export const productSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    "string.empty": "Tên sản phẩm không được để trống.",
    "any.required": "Tên sản phẩm là bắt buộc.",
  }),

  price: Joi.number().min(0).required().messages({
    "number.base": "Giá sản phẩm phải là số.",
    "number.min": "Giá sản phẩm không thể nhỏ hơn 0.",
    "any.required": "Giá sản phẩm là bắt buộc.",
  }),

  discount: Joi.number().min(0).max(100).default(0).messages({
    "number.min": "Giảm giá không thể nhỏ hơn 0%.",
    "number.max": "Giảm giá không thể lớn hơn 100%.",
  }),

  stock: Joi.number().min(0).required().messages({
    "number.base": "Số lượng trong kho phải là số.",
    "number.min": "Số lượng trong kho không thể nhỏ hơn 0.",
    "any.required": "Số lượng trong kho là bắt buộc.",
  }),

  brand: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({
    "string.pattern.base": "Brand ID không hợp lệ.",
    "any.required": "Thương hiệu là bắt buộc.",
  }),

  category: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({
    "string.pattern.base": "Category ID không hợp lệ.",
    "any.required": "Danh mục là bắt buộc.",
  }),

  images: Joi.array().items(Joi.string().uri()).min(1).required().messages({
    "array.min": "Phải có ít nhất một hình ảnh.",
    "any.required": "Hình ảnh là bắt buộc.",
  }),

  colors: Joi.array().items(Joi.string()).min(1).required().messages({
    "array.min": "Phải có ít nhất một màu sắc.",
    "any.required": "Danh sách màu sắc là bắt buộc.",
  }),

  ram: Joi.array()
    .items(
      Joi.object({
        size: Joi.string().required().messages({ "any.required": "Kích thước RAM là bắt buộc." }),
        priceDifference: Joi.number().default(0),
      })
    )
    .optional(),

  storage: Joi.array()
    .items(
      Joi.object({
        capacity: Joi.string().required().messages({ "any.required": "Dung lượng lưu trữ là bắt buộc." }),
        priceDifference: Joi.number().default(0),
      })
    )
    .optional(),

  description: Joi.string().required().messages({
    "any.required": "Mô tả sản phẩm là bắt buộc.",
  }),

  specifications: Joi.object().required().messages({
    "any.required": "Thông số kỹ thuật là bắt buộc.",
  }),

  rating: Joi.number().min(0).max(5).default(0).messages({
    "number.min": "Điểm đánh giá không thể nhỏ hơn 0.",
    "number.max": "Điểm đánh giá không thể lớn hơn 5.",
  }),

  isFeatured: Joi.boolean().default(false),

  view: Joi.number().min(0).default(0).messages({
    "number.min": "Lượt xem không thể nhỏ hơn 0.",
  }),

  flashSale: Joi.object({
    flashSalePrice: Joi.number().min(0).optional(),
    flashSaleStart: Joi.date().optional(),
    flashSaleEnd: Joi.date().optional(),
  }).optional().custom((value, helpers) => {
    if (value && value.flashSaleStart && value.flashSaleEnd) {
      if (new Date(value.flashSaleStart) >= new Date(value.flashSaleEnd)) {
        return helpers.error("Thời gian bắt đầu Flash Sale phải nhỏ hơn thời gian kết thúc.");
      }
    }
    return value;
  }),
});
