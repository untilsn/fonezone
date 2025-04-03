import Joi from "joi";

export const createBlogValidation = Joi.object({
  title: Joi.string().trim().required().messages({
    "string.base": "Tiêu đề phải là chuỗi ký tự.",
    "string.empty": "Tiêu đề không được để trống.",
    "any.required": "Tiêu đề là bắt buộc.",
  }),
  // slug: Joi.string().trim().lowercase().required().messages({
  //   "string.base": "Slug phải là chuỗi ký tự.",
  //   "string.empty": "Slug không được để trống.",
  //   "any.required": "Slug là bắt buộc.",
  // }),
  content: Joi.string().required().messages({
    "string.base": "Nội dung phải là chuỗi ký tự.",
    "string.empty": "Nội dung không được để trống.",
    "any.required": "Nội dung là bắt buộc.",
  }),
  thumbnail: Joi.string().optional().allow("").messages({
    "string.base": "Thumbnail phải là chuỗi ký tự (URL).",
  }),
  categories: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/)).messages({
    "array.base": "Danh mục phải là một mảng.",
    "string.pattern.base": "Mỗi danh mục phải là một ObjectId hợp lệ.",
  }),
  author: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({
    "string.base": "Author phải là một chuỗi.",
    "string.pattern.base": "Author phải là một ObjectId hợp lệ.",
    "any.required": "Author là bắt buộc.",
  }),
  isPublished: Joi.boolean().optional().messages({
    "boolean.base": "isPublished phải là một giá trị boolean.",
  }),
});

export const updateBlogValidation = Joi.object({
  title: Joi.string().trim().optional().messages({
    "string.base": "Tiêu đề phải là chuỗi ký tự.",
  }),
  slug: Joi.string().trim().lowercase().optional().messages({
    "string.base": "Slug phải là chuỗi ký tự.",
  }),
  content: Joi.string().optional().messages({
    "string.base": "Nội dung phải là chuỗi ký tự.",
  }),
  thumbnail: Joi.string().optional().allow("").messages({
    "string.base": "Thumbnail phải là chuỗi ký tự (URL).",
  }),
  categories: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/)).optional().messages({
    "array.base": "Danh mục phải là một mảng.",
    "string.pattern.base": "Mỗi danh mục phải là một ObjectId hợp lệ.",
  }),
  author: Joi.string().regex(/^[0-9a-fA-F]{24}$/).optional().messages({
    "string.base": "Author phải là một ObjectId hợp lệ.",
  }),
  isPublished: Joi.boolean().optional().messages({
    "boolean.base": "isPublished phải là một giá trị boolean.",
  }),
});
