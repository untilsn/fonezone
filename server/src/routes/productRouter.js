import express from 'express';
import { getAllProductsController } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get('/', getAllProductsController);
productRouter.get('/:id',);
productRouter.get('/filter',);
productRouter.post('/create',);
productRouter.put('/update/:id',);
productRouter.delete('/delete/:id',);

export default productRouter;