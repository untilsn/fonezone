import express from 'express';
import {
  createBrandController,
  deleteBrandController,
  getAllBrandsController,
  updateBrandController
} from '../controllers/brandController.js';
import validate from '../middlewares/validateMiddleware.js';
import { brandValidation } from '../validation/brandValidation.js';
import { isAdmin } from '../middlewares/authMiddleware.js';

const brandRouter = express.Router();

/*USER ROUTE*/
brandRouter.get('/', getAllBrandsController);

/*ADMIN ROUTES*/
brandRouter.post('/', isAdmin, validate(brandValidation), createBrandController);
brandRouter.patch('/:id', isAdmin, validate(brandValidation), updateBrandController);
brandRouter.delete('/:id', isAdmin, deleteBrandController);

export default brandRouter;
