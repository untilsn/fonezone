import express from 'express';
import {
  createProductController,
  deleteProductController,
  getProductByIdController,
  getProductsController,
  updateProductController
} from '../../controllers/productController.js';

const productRouter = express.Router();
const adminProductRouter = express.Router();

/* USER ROUTE */
productRouter
  .get('/', getProductsController) // Người dùng lấy tất cả sản phẩm
  .get('/:id', getProductByIdController) // Người dùng lấy chi tiết sản phẩm theo ID

/* ADMIN ROUTE */
adminProductRouter
  .post('/', createProductController)// Admin tạo sản phẩm mới
  .put('/:id', updateProductController) // Admin cập nhật sản phẩm
  .delete('/:id', deleteProductController); // Admin xóa sản phẩm

export { productRouter, adminProductRouter };
