import express from 'express';
import {
  addWishlistController,
  clearWishlistController,
  getWishlistController,
  removeWishlistController
} from '../controllers/wishlistController.js';
import { isUser } from '../middlewares/authMiddleware.js';

const wishlistRouter = express.Router();

wishlistRouter.use(isUser);
wishlistRouter.get('/', getWishlistController);
wishlistRouter.post('/add', addWishlistController);
wishlistRouter.delete('/remove/:id', removeWishlistController);
wishlistRouter.delete('/clear', clearWishlistController);

export default wishlistRouter;