import {
  applyCoupon,
  createCoupon,
  deleteCoupon,
  getAllCoupons,
  getCouponById,
  updateCoupon
} from "../services/couponService.js";

export const getCouponByCodeController = async (req, res, next) => {
  try {
    const { code } = req.params;

    if (!code) {
      return res.status(400).json({ success: false, message: "Thiếu mã coupon!" });
    }

    const coupons = await getAllCoupons();
    return res.status(200).json({
      success: true,
      data: coupons,
      message: "Lấy danh sách mã giảm giá thành công!",
    });
  } catch (error) {
    next(error);
  }
};


export const getAllCouponsController = async (req, res, next) => {
  try {
    const coupons = await getAllCoupons();
    return res.status(200).json({
      success: true,
      data: coupons,
      message: "Lấy danh sách mã giảm giá thành công!",
    });
  } catch (error) {
    next(error);
  }
};


export const getCouponsController = async (req, res, next) => {
  try {
    const coupons = await getAllCoupons();
    return res.status(200).json({
      success: true,
      data: coupons,
      message: "Lấy danh sách mã giảm giá thành công!",
    });
  } catch (error) {
    next(error);
  }
};


export const getCouponByIdController = async (req, res, next) => {
  try {
    const coupon = await getCouponById(req.params.id);
    if (!coupon) {
      return res.status(404).json({
        success: false,
        message: "Mã giảm giá không tồn tại!",
      });
    }
    return res.status(200).json({
      success: true,
      data: coupon,
      message: "Lấy thông tin mã giảm giá thành công!",
    });
  } catch (error) {
    next(error);
  }
};


export const createCouponController = async (req, res, next) => {
  try {
    const newCoupon = await createCoupon(req.body);
    return res.status(201).json({
      success: true,
      data: newCoupon,
      message: "Mã giảm giá đã được tạo thành công!",
    });
  } catch (error) {
    next(error);
  }
};

export const updateCouponController = async (req, res, next) => {
  try {
    const updatedCoupon = await updateCoupon(req.params.id, req.body);
    if (!updatedCoupon) {
      return res.status(404).json({
        success: false,
        message: "Mã giảm giá không tồn tại!",
      });
    }
    return res.status(200).json({
      success: true,
      data: updatedCoupon,
      message: "Cập nhật mã giảm giá thành công!",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCouponController = async (req, res, next) => {
  try {
    const deletedCoupon = await deleteCoupon(req.params.id);
    if (!deletedCoupon) {
      return res.status(404).json({
        success: false,
        message: "Mã giảm giá không tồn tại!",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Xóa mã giảm giá thành công!",
    });
  } catch (error) {
    next(error);
  }
};

export const applyCouponController = async (req, res, next) => {
  try {
    const { code, userId, orderValue } = req.body;
    const discount = await applyCoupon(code, userId, orderValue);
    return res.status(200).json({
      success: true,
      discount,
      message: "Áp dụng mã giảm giá thành công!",
    });
  } catch (error) {
    next(error);
  }
};


