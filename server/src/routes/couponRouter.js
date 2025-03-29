import express from 'express';
import {
  createCouponController,
  updateCouponController,
  deleteCouponController,
  getAllCouponsController,
  getCouponByCodeController,
  applyCouponController
} from '../controllers/couponController.js';
import validate from '../middlewares/validateMiddleware.js';
import { isUser, isAdmin } from '../middlewares/authMiddleware.js';
import { couponValidation } from '../validation/couponValidation.js';

const couponRouter = express.Router();

/* ------------------- User Routes ------------------- */
// User xem chi tiết coupon qua mã code (để áp dụng)
couponRouter.get('/:code', isUser, getCouponByCodeController);

// User áp dụng coupon vào đơn hàng
couponRouter.post('/apply', isUser, applyCouponController);

/* ------------------- Admin Routes ------------------- */
// Admin tạo mới coupon
couponRouter.post('/create', isUser, isAdmin, validate(couponValidation), createCouponController);

// Admin cập nhật coupon
couponRouter.patch('/update/:id', isUser, isAdmin, validate(couponValidation), updateCouponController);

// Admin xóa coupon
couponRouter.delete('/delete/:id', isUser, isAdmin, deleteCouponController);

// Admin xem danh sách tất cả các coupon
couponRouter.get('/', isUser, isAdmin, getAllCouponsController);

export default couponRouter;
