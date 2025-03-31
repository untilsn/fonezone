import express from 'express';
import {
  createBrandController,
  deleteBrandController,
  getAllBrandsController,
  updateBrandController
} from '../../controllers/brandController.js';
import validate from '../../middlewares/validateMiddleware.js';
import { brandValidation } from '../../validation/brandValidation.js';

const brandRouter = express.Router();
const adminBrandRouter = express.Router();

//USER ROUTERC
brandRouter.get('/', getAllBrandsController);

//ADMIN ROUTER
adminBrandRouter
  .post('/', validate(brandValidation), createBrandController)
  .patch('/:id', validate(brandValidation), updateBrandController)
  .delete('/:id', deleteBrandController)

export { brandRouter, adminBrandRouter };
