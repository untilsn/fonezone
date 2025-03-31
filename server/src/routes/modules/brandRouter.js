import express from 'express';
import {
  createBrandController,
  deleteBrandController,
  getAllBrandsController,
  updateBrandController
} from '../../controllers/brandController.js';
import validate from '../../middlewares/validateMiddleware.js';
import { brandValidation } from '../../validation/brandValidation.js';
import { checkIdParam } from '../../middlewares/paramIdMiddleware.js';

const brandRouter = express.Router();
const adminBrandRouter = express.Router();

//USER ROUTERC
brandRouter.get('/', getAllBrandsController);

//ADMIN ROUTER
adminBrandRouter
  .post('/', validate(brandValidation), createBrandController)
  .patch('/:id', checkIdParam, validate(brandValidation), updateBrandController)
  .delete('/:id', checkIdParam, deleteBrandController)

export { brandRouter, adminBrandRouter };
