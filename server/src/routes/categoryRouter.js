import express from 'express';
import validateMiddleware from '../middlewares/validateMiddleware.js';
import {
  addCategoryController,
  deleteCategoryController,
  getAllCategoryController,
  updateCategoryController
} from '../controllers/categoryController.js';
import { categorySchema } from '../validation/categoryValidation.js';

const categoryRouter = express.Router();

categoryRouter.get('/', getAllCategoryController);
categoryRouter.get('/:id', getAllCategoryController);
categoryRouter.post('/create', validateMiddleware(categorySchema), addCategoryController);
categoryRouter.put('/update/:id', updateCategoryController);
categoryRouter.delete('/delete/:id', deleteCategoryController);

export default categoryRouter;