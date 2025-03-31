import express from 'express';
import validate from '../../middlewares/validateMiddleware.js';
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoriesController,
  updateCategoryController
} from '../../controllers/categoryController.js';
import { categoryValidation, updateCategoryValidation } from '../../validation/categoryValidation.js';

const categoryRouter = express.Router();
const adminCategoryRouter = express.Router();

//USER ROUTER
categoryRouter.get('/', getAllCategoriesController);

//ADMIN ROUTER
adminCategoryRouter
  .post('/', validate(categoryValidation), createCategoryController)
  .patch('/:id', validate(updateCategoryValidation), updateCategoryController)
  .delete('/:id', deleteCategoryController)

export { categoryRouter, adminCategoryRouter };
