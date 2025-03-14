import express from 'express';
import {
  createProductController,
  deleteProductController,
  getProductByIdController,
  getProductsController,
  updateProductController
} from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get('/', getProductsController);
productRouter.get('/:id', getProductByIdController);

export default productRouter;