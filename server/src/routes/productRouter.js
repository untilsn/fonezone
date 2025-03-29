import express from 'express';
import {
  createProductController,
  deleteProductController,
  getProductByIdController,
  getProductsController,
  updateProductController
} from '../controllers/productController.js';
import { isUser, isAdmin } from '../middlewares/authMiddleware.js';

const productRouter = express.Router();

/* USER ROUTE */
productRouter.get('/', isUser, getProductsController); // Người dùng lấy tất cả sản phẩm
productRouter.get('/:id', isUser, getProductByIdController); // Người dùng lấy chi tiết sản phẩm theo ID

/* ADMIN ROUTE */
productRouter.post('/create', isAdmin, createProductController); // Admin tạo sản phẩm mới
productRouter.put('/update/:id', isAdmin, updateProductController); // Admin cập nhật sản phẩm
productRouter.delete('/delete/:id', isAdmin, deleteProductController); // Admin xóa sản phẩm

export default productRouter;
