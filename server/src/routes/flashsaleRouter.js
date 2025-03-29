import express from 'express';
import {
  createFlashSaleController,
  deleteFlashSaleController,
  getActiveFlashSaleController,
  getAllFlashSalesController,
  getFlashSaleByIdController,
  updateFlashSaleController
} from '../controllers/flashsaleController.js';
import { isAdmin } from '../middlewares/authMiddleware.js';

const flashsaleRouter = express.Router();

/* USER ROUTE */
flashsaleRouter.get('/', getAllFlashSalesController); // Lấy tất cả Flash Sale
flashsaleRouter.get('/active', getActiveFlashSaleController); // Lấy Flash Sale đang hoạt động

/* ADMIN ROUTE */
flashsaleRouter.post('/create', isAdmin, createFlashSaleController); // Tạo Flash Sale mới
flashsaleRouter.get('/:id', isAdmin, getFlashSaleByIdController); // Lấy thông tin Flash Sale theo ID (Admin cần xem chi tiết)
flashsaleRouter.put('/update/:id', isAdmin, updateFlashSaleController); // Cập nhật Flash Sale theo ID
flashsaleRouter.delete('/delete/:id', isAdmin, deleteFlashSaleController); // Xóa Flash Sale theo ID

export default flashsaleRouter;
