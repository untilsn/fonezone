import errorHandle from "../middlewares/errorMiddleware.js";
import Coupon from "../models/Coupon.js";

export const getAllCoupons = async () => {
  return await Coupon.find();
};

export const getCouponById = async (id) => {
  return await Coupon.findById(id);
};

export const createCoupon = async (couponData) => {
  return await Coupon.create(couponData);
};

export const updateCoupon = async (id, couponData) => {
  return await Coupon.findByIdAndUpdate(id, couponData, { new: true });
};

export const deleteCoupon = async (id) => {
  return await Coupon.findByIdAndDelete(id);
};

export const applyCoupon = async (code, userId, orderValue) => {
  const coupon = await Coupon.findOne({ code });
  if (!coupon) throw errorHandle(400, "Mã giảm giá không hợp lệ!");
  if (new Date(coupon.expireAt) < new Date()) throw errorHandle(400, "Mã giảm giá đã hết hạn!");

  const userUsageCount = coupon.usedBy.filter((id) => id.toString() === userId).length;
  if (userUsageCount >= coupon.usageLimit) throw errorHandle(403, `Bạn đã dùng mã này ${coupon.usageLimit} lần!`);

  if (orderValue < coupon.minOrderValue) throw errorHandle(400, `Đơn hàng cần tối thiểu ${coupon.minOrderValue} để áp dụng mã!`);

  let discountAmount = (orderValue * coupon.discountPercent) / 100;
  if (coupon.maxDiscount && discountAmount > coupon.maxDiscount) {
    discountAmount = coupon.maxDiscount;
  }

  return discountAmount;
};
