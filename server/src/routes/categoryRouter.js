import express from 'express';
import validate from '../middlewares/validateMiddleware.js';
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoriesController,
  updateCategoryController
} from '../controllers/categoryController.js';
import { categoryValidation, updateCategoryValidation } from '../validation/categoryValidation.js';
import { isAdmin } from '../middlewares/authMiddleware.js';

const categoryRouter = express.Router();

/*USER ROUTE*/
categoryRouter.get('/', getAllCategoriesController);

/*ADMIN ROUTES*/
categoryRouter.post('/', isAdmin, validate(categoryValidation), createCategoryController);
categoryRouter.patch('/:id', isAdmin, validate(updateCategoryValidation), updateCategoryController);
categoryRouter.delete('/:id', isAdmin, deleteCategoryController);

export default categoryRouter;
