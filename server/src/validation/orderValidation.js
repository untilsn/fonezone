import Joi from "joi";

export const createOrderValidation = Joi.object({
  user: Joi.string().required(), // ID của người dùng (dạng ObjectId)
  products: Joi.array()
    .items(
      Joi.object({
        product: Joi.string().required(), // ID của sản phẩm (dạng ObjectId)
        quantity: Joi.number().min(1).required(),
        price: Joi.number().min(0).required(),
      })
    )
    .min(1)
    .required(),
  paymentMethod: Joi.string().valid("cod", "credit_card", "paypal", "bank_transfer").required(),
  shippingMethod: Joi.string().valid("standard", "express", "same_day", "pickup").required(),
  shippingAddress: Joi.object({
    fullName: Joi.string().required(),
    phone: Joi.string().pattern(/^0\d{9}$/).required().messages({
      "string.pattern.base": "Số điện thoại phải bắt đầu bằng số 0 và có 10 chữ số."
    }),
    address: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
  }).required(),
  orderNote: Joi.string().optional(),
});

export const updateOrderStatusValidation = Joi.object({
  orderStatus: Joi.string().valid("pending", "processing", "shipped", "delivered", "canceled").required(),
  paymentStatus: Joi.string().valid("pending", "paid", "failed", "refunded").optional(),
  deliveryStatus: Joi.string().valid("pending", "shipped", "delivered", "returned").optional(),
  trackingNumber: Joi.string().optional(),
  deliveredAt: Joi.date().optional(),
  paymentResult: Joi.object({
    transactionId: Joi.string().optional(),
    status: Joi.string().optional(),
    updateTime: Joi.date().optional(),
    email: Joi.string().email().optional(),
  }).optional(),
});
