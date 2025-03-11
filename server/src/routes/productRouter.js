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
productRouter.post('/create', createProductController);
productRouter.put('/update/:id', updateProductController);
productRouter.delete('/delete/:id', deleteProductController);

export default productRouter;