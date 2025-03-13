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
brandRouter.post('/create', validateMiddleware(brandValidationSchema) , createBrandController);
brandRouter.put('/update/:id', updateBrandController);
brandRouter.delete('/delete/:id', deleteBrandController);

export default brandRouter;