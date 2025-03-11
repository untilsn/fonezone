import express from 'express';
import {
  createBrandController,
  deleteBrandController,
  getAllBrandsController,
  getBrandByIdController,
  updateBrandController
} from '../controllers/brandController.js';
import validateMiddleware from '../middlewares/validateMiddleware.js';
import { brandValidationSchema } from '../validation/brandValidation.js';

const brandRouter = express.Router();

brandRouter.get('/', getAllBrandsController);
brandRouter.get('/:id', getBrandByIdController);
brandRouter.post('/', validateMiddleware(brandValidationSchema) , createBrandController);
brandRouter.put('/:id', updateBrandController);
brandRouter.delete('/:id', deleteBrandController);

export default brandRouter;