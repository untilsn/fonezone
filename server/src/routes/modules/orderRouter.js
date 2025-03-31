import express from 'express';
import {
  createOrderController,
  getAllOrdersController,
  getOrderByIdController,
  getUserOrdersController,
  updateOrderStatusController,
  deleteOrderController
} from '../../controllers/orderController.js';

const orderRouter = express.Router();
const adminOrderRouter = express.Router();

/* USER ROUTE */
orderRouter
  .post('/create', createOrderController) // Người dùng tạo đơn hàng
  .get('/', getUserOrdersController) // Người dùng xem tất cả đơn hàng của chính họ
  .get('/:id', getOrderByIdController); // Người dùng xem chi tiết đơn hàng của chính họ

/* ADMIN ROUTE */
adminOrderRouter
  .get('/', getAllOrdersController) // Admin xem tất cả đơn hàng
  .get('/:id', getOrderByIdController) // Admin xem chi tiết đơn hàng theo ID
  .patch('/:id', updateOrderStatusController) // Admin cập nhật trạng thái đơn hàng
  .delete('/:id', deleteOrderController); // Admin xóa đơn hàng theo ID

export { orderRouter, adminOrderRouter };
