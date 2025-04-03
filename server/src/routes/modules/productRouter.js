import express from 'express';
import {
  createProductController,
  deleteProductController,
  getProductByIdController,
  getProductsController,
  updateProductController
} from '../../controllers/productController.js';
import validate from '../../middlewares/validateMiddleware.js';
import { productValidation, updateProductValidation } from '../../validation/productValidation.js';
import { checkIdParam } from '../../middlewares/paramIdMiddleware.js';
import { uploadMiddleware } from '../../middlewares/uploadMiddleware.js';
import { productUpload } from '../../config/multer.js';

const productRouter = express.Router();
const adminProductRouter = express.Router();


/* USER ROUTE */
productRouter
  .get('/', getProductsController) // Người dùng lấy tất cả sản phẩm
  .get('/:id', checkIdParam, getProductByIdController) // Người dùng lấy chi tiết sản phẩm theo ID

/* ADMIN ROUTE */
adminProductRouter
  .post('/', uploadMiddleware(productUpload, 5), validate(productValidation), createProductController)// Admin tạo sản phẩm mới
  .put('/:id', checkIdParam, validate(updateProductValidation), updateProductController) // Admin cập nhật sản phẩm
  .delete('/:id', checkIdParam, deleteProductController); // Admin xóa sản phẩm

export { productRouter, adminProductRouter };
