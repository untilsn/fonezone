import express from 'express';
import {
  createFlashSaleController,
  deleteFlashSaleController,
  getActiveFlashSaleController,
  getAllFlashSalesController,
  getFlashSaleByIdController,
  updateFlashSaleController
} from '../../controllers/flashsaleController.js';
import { isAdmin } from '../../middlewares/authMiddleware.js';

const flashsaleRouter = express.Router();
const adminFlashsaleRouter = express.Router();

flashsaleRouter.get('/', getAllFlashSalesController);
flashsaleRouter.get('/active', getActiveFlashSaleController);
flashsaleRouter.get('/:id', getFlashSaleByIdController);
/* ADMIN ROUTE */
adminFlashsaleRouter.post('/', isAdmin, createFlashSaleController); // Tạo Flash Sale mới
adminFlashsaleRouter.get('/:id', isAdmin, getFlashSaleByIdController); // Lấy thông tin Flash Sale theo ID (Admin cần xem chi tiết)
adminFlashsaleRouter.put('/:id', isAdmin, updateFlashSaleController); // Cập nhật Flash Sale theo ID
adminFlashsaleRouter.delete('/:id', isAdmin, deleteFlashSaleController); // Xóa Flash Sale theo ID

export { flashsaleRouter, adminFlashsaleRouter };
