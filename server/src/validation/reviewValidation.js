import Joi from "joi";

// Validation khi tạo review mới
export const createReviewValidation = Joi.object({
  user: Joi.string().required().messages({
    "any.required": "User ID là bắt buộc.",
    "string.base": "User ID phải là một chuỗi hợp lệ."
  }),
  referenceModel: Joi.string().required().messages({
    "any.required": "referenceModel là bắt buộc.",
    "string.base": "referenceModel phải là một chuỗi hợp lệ."
  }),
  onModel: Joi.string().valid("Product", "Blog").required().messages({
    "any.required": "onModel là bắt buộc.",
    "string.base": "onModel phải là một chuỗi hợp lệ.",
    "any.only": "onModel phải là 'Product' hoặc 'Blog'."
  }),
  rating: Joi.number().integer().min(1).max(5).required().messages({
    "any.required": "Rating là bắt buộc.",
    "number.base": "Rating phải là một số nguyên.",
    "number.min": "Rating phải từ 1 đến 5.",
    "number.max": "Rating phải từ 1 đến 5."
  }),
  comment: Joi.string().trim().required().messages({
    "any.required": "Comment là bắt buộc.",
    "string.base": "Comment phải là một chuỗi."
  }),
  isApproved: Joi.boolean().optional().messages({
    "boolean.base": "isApproved phải là kiểu boolean."
  })
});

// Validation khi cập nhật review
export const updateReviewValidation = Joi.object({
  rating: Joi.number().integer().min(1).max(5).optional().messages({
    "number.base": "Rating phải là một số nguyên.",
    "number.min": "Rating phải từ 1 đến 5.",
    "number.max": "Rating phải từ 1 đến 5."
  }),
  comment: Joi.string().trim().optional().messages({
    "string.base": "Comment phải là một chuỗi."
  }),
  isApproved: Joi.boolean().optional().messages({
    "boolean.base": "isApproved phải là kiểu boolean."
  })
});
