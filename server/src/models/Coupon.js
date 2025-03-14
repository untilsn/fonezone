import mongoose from "mongoose";

const Schema = mongoose.Schema;

const couponSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true, // Mã giảm giá viết hoa
    },
    discountType: {
      type: String,
      enum: ["percentage", "fixed"],
      required: true,
    },
    discountValue: {
      type: Number,
      required: true,
    },
    minOrderValue: {
      type: Number,
      default: 0, // Chỉ áp dụng cho đơn hàng từ giá trị này
    },
    maxDiscount: {
      type: Number, // Giới hạn giảm giá tối đa (cho discountType: "percentage")
    },
    usageLimit: {
      type: Number, // Số lần coupon có thể sử dụng
      default: 1,
    },
    usedCount: {
      type: Number,
      default: 0,
    },
    validFrom: {
      type: Date,
      required: true,
    },
    validTo: {
      type: Date,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true, // Trạng thái coupon
    },
  },
  { timestamps: true }
);

const Coupon = mongoose.model("Coupon", couponSchema);
export default Coupon;
