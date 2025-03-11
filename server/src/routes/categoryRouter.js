import express from 'express';
import validateMiddleware from '../middlewares/validateMiddleware.js';
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoriesController,
  getCategoryByIdController,
  updateCategoryController
} from '../controllers/categoryController.js';
import { categorySchema } from '../validation/categoryValidation.js';

const categoryRouter = express.Router();

categoryRouter.get('/', getAllCategoriesController);
categoryRouter.get('/:id', getCategoryByIdController);
categoryRouter.post('/create', validateMiddleware(categorySchema), createCategoryController);
categoryRouter.put('/update/:id', updateCategoryController);
categoryRouter.delete('/delete/:id', deleteCategoryController);

export default categoryRouter;