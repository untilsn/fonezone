import express from 'express';
import {
  createFlashSaleController,
  deleteFlashSaleController,
  getActiveFlashSaleController,
  getAllFlashSalesController,
  getFlashSaleByIdController,
  updateFlashSaleController
} from '../../controllers/flashsaleController.js';
import { checkIdParam } from '../../middlewares/paramIdMiddleware.js';

const flashsaleRouter = express.Router();
const adminFlashsaleRouter = express.Router();

flashsaleRouter.get('/', getAllFlashSalesController);
flashsaleRouter.get('/active', getActiveFlashSaleController);
flashsaleRouter.get('/:id', checkIdParam, getFlashSaleByIdController);
/* ADMIN ROUTE */
adminFlashsaleRouter.post('/', createFlashSaleController); // Tạo Flash Sale mới
adminFlashsaleRouter.get('/:id', checkIdParam, getFlashSaleByIdController); // Lấy thông tin Flash Sale theo ID (Admin cần xem chi tiết)
adminFlashsaleRouter.put('/:id', checkIdParam, updateFlashSaleController); // Cập nhật Flash Sale theo ID
adminFlashsaleRouter.delete('/:id', checkIdParam, deleteFlashSaleController); // Xóa Flash Sale theo ID

export { flashsaleRouter, adminFlashsaleRouter };
