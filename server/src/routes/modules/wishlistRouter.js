import express from 'express';
import {
  addWishlistController,
  clearWishlistController,
  getWishlistController,
  removeWishlistController
} from '../../controllers/wishlistController.js';

const wishlistRouter = express.Router();

wishlistRouter
  .get('/', getWishlistController)
  .post('/', addWishlistController)
  .delete('/:id', removeWishlistController)
  .delete('/', clearWishlistController)

export default wishlistRouter;