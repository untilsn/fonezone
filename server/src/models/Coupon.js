import mongoose from "mongoose";

const CouponSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Tên hiển thị cho coupon
    code: { type: String, unique: true, required: true }, // Mã coupon
    discountPercent: { type: Number, required: true }, // Giá trị giảm
    minOrderValue: { type: Number, default: 0 }, // Giá trị đơn hàng tối thiểu
    maxDiscount: { type: Number }, // Giảm tối đa (nếu là percentage)
    expireAt: { type: Date, required: true }, // Ngày hết hạn
    usageLimit: { type: Number, default: 1 }, // Số lần sử dụng tối đa / 1 user
    usedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Lưu user đã dùng
  },
  { timestamps: true }
);

const Coupon = mongoose.model("Coupon", CouponSchema);

export default Coupon
