import express from 'express';
import {
  createOrderController,
  getAllOrdersController,
  getOrderByIdController,
  getUserOrdersController,
  updateOrderStatusController,
  deleteOrderController
} from '../controllers/orderController.js';
import { isUser, isAdmin } from '../middlewares/authMiddleware.js';


const orderRouter = express.Router();

/* USER ROUTE */
orderRouter.post('/create', isUser, createOrderController); // Người dùng tạo đơn hàng
orderRouter.get('/', isUser, getUserOrdersController); // Người dùng xem tất cả đơn hàng của chính họ
orderRouter.get('/:id', isUser, getOrderByIdController); // Người dùng xem chi tiết đơn hàng của chính họ

/* ADMIN ROUTE */
orderRouter.get('/admin/all', isAdmin, getAllOrdersController); // Admin xem tất cả đơn hàng
orderRouter.get('/admin/:id', isAdmin, getOrderByIdController); // Admin xem chi tiết đơn hàng theo ID
orderRouter.patch('/admin/update/:id', isAdmin, updateOrderStatusController); // Admin cập nhật trạng thái đơn hàng
orderRouter.delete('/admin/delete/:id', isAdmin, deleteOrderController); // Admin xóa đơn hàng theo ID

export default orderRouter;
