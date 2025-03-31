import express from 'express';
import {
  addWishlistController,
  clearWishlistController,
  getWishlistController,
  removeWishlistController
} from '../../controllers/wishlistController.js';
import { checkIdParam } from '../../middlewares/paramIdMiddleware.js';

const wishlistRouter = express.Router();

wishlistRouter
  .get('/', getWishlistController)
  .post('/', addWishlistController)
  .delete('/:id', checkIdParam, removeWishlistController)
  .delete('/', clearWishlistController)

export default wishlistRouter;