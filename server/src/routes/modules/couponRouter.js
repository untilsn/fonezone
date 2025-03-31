import express from 'express';
import {
  createCouponController,
  updateCouponController,
  deleteCouponController,
  getAllCouponsController,
  getCouponByCodeController,
  applyCouponController
} from '../../controllers/couponController.js';
import validate from '../../middlewares/validateMiddleware.js';
import { couponValidation } from '../../validation/couponValidation.js';
import { checkIdParam } from '../../middlewares/paramIdMiddleware.js';

const couponRouter = express.Router();
const adminCouponRouter = express.Router();

//USER ROUTER
couponRouter
  .get('/:code', getCouponByCodeController) // User xem chi tiết coupon qua mã code (để áp dụng)
  .post('/apply', applyCouponController); // User áp dụng coupon vào đơn hàng

//ADMIN ROUTER
adminCouponRouter
  .get('/', getAllCouponsController) // Lấy danh sách tất cả coupon (Admin)
  .post('/', validate(couponValidation), createCouponController) // Tạo coupon mới (Admin)
  .patch('/:id', checkIdParam, validate(couponValidation), updateCouponController) // Cập nhật thông tin coupon (Admin)
  .delete('/:id', checkIdParam, deleteCouponController); // Xóa coupon (Admin)

export { couponRouter, adminCouponRouter };

