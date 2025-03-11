import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
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
    description: { type: String, required: true },
    specifications: {
      screen: { type: String, required: true }, processor: { type: String, required: true },
      ram: { type: String, required: true }, storage: { type: String, required: true },
      battery: { type: String, required: true }, camera: { type: String, required: true },
      os: { type: String, required: true },
    },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviews: [
      { user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
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
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Product =  mongoose.model("Product", productSchema);

export default Product
