import mongoose from "mongoose";
import {
  calculateDiscountPrice,
  calculateDiscountPriceOnUpdate,
  generateSlug,
  generateSlugOnUpdate,
  validateFlashSale,
  validateFlashSaleOnUpdate
} from "../utils/mongooseHooks.js";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: false, unique: true, lowercase: true },
    price: { type: Number, required: true, min: 0 },
    discount: { type: Number, default: 0 },
    discountPrice: { type: Number, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    brand: { type: mongoose.Schema.Types.ObjectId, ref: "Brand", required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    images: {
      type: [String],
      validate: { validator: (v) => v.length > 0, message: "Phải có ít nhất một hình ảnh" },
    },
    colors: { type: [String], required: false },
    ram: [{
      size: { type: String, required: true },
      priceDifference: { type: Number, default: 0 }
    }],
    storage: [{
      capacity: { type: String, required: true },
      priceDifference: { type: Number, default: 0 }
    }],
    description: { type: String, required: true },
    specifications: { type: Object, required: true },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviews: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        rating: { type: Number, required: true, min: 1, max: 5 },
        comment: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    isFeatured: { type: Boolean, default: false },
    view: { type: Number, default: 0, min: 0 },
    flashSale: {
      flashSalePrice: { type: Number, min: 0 },
      flashSaleStart: { type: Date },
      flashSaleEnd: { type: Date }
    },
  },
  { timestamps: true }
);

// Middleware xử lý khi lưu mới
productSchema.pre("save", generateSlug);
productSchema.pre("save", calculateDiscountPrice);
productSchema.pre("save", validateFlashSale);

// Middleware xử lý khi update
productSchema.pre("findOneAndUpdate", generateSlugOnUpdate);
productSchema.pre("findOneAndUpdate", calculateDiscountPriceOnUpdate);
productSchema.pre("findOneAndUpdate", validateFlashSaleOnUpdate);

const Product = mongoose.model("Product", productSchema);

export default Product
