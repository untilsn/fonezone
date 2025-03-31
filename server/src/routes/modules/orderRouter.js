import express from 'express';
import {
  createOrderController,
  getAllOrdersController,
  getOrderByIdController,
  getUserOrdersController,
  updateOrderStatusController,
  deleteOrderController
} from '../../controllers/orderController.js';
import validate from '../../middlewares/validateMiddleware.js';
import { createOrderValidation, updateOrderStatusValidation } from '../../validation/orderValidation.js';
import { checkIdParam } from '../../middlewares/paramIdMiddleware.js';

const orderRouter = express.Router();
const adminOrderRouter = express.Router();

/* USER ROUTE */
orderRouter
  .post('/create', validate(createOrderValidation), createOrderController) // Người dùng tạo đơn hàng
  .get('/', getUserOrdersController) // Người dùng xem tất cả đơn hàng của chính họ
  .get('/:id', checkIdParam, getOrderByIdController); // Người dùng xem chi tiết đơn hàng của chính họ

/* ADMIN ROUTE */
adminOrderRouter
  .get('/', getAllOrdersController) // Admin xem tất cả đơn hàng
  .get('/:id', checkIdParam, getOrderByIdController) // Admin xem chi tiết đơn hàng theo ID
  .patch('/:id', checkIdParam, validate(updateOrderStatusValidation), updateOrderStatusController) // Admin cập nhật trạng thái đơn hàng
  .delete('/:id', checkIdParam, deleteOrderController); // Admin xóa đơn hàng theo ID

export { orderRouter, adminOrderRouter };
