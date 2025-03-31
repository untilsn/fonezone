import express from 'express';
import { productRouter } from './modules/productRouter.js';
import { categoryRouter } from './modules/categoryRouter.js';
import { brandRouter } from './modules/brandRouter.js';
import { blogRouter } from './modules/blogRouter.js';
import { flashsaleRouter } from './modules/flashsaleRouter.js';
import { userRouter } from './modules/userRouter.js';
import { orderRouter } from './modules/orderRouter.js';
import wishlistRouter from './modules/wishlistRouter.js';
import { reviewRouter } from './modules/reviewRouter.js';
import { couponRouter } from './modules/couponRouter.js';
import { conversationRouter } from "./modules/conversationRouter.js"
import { isUser } from '../middlewares/authMiddleware.js';


const clientRouter = express.Router();

clientRouter
  .use('/products', productRouter)
  .use('/categories', categoryRouter)
  .use('/brands', brandRouter)
  .use('/blogs', blogRouter)
  .use('/flash-sales', flashsaleRouter)
  // yêu cầu đăng nhập
  .use(isUser)
  .use('/user', userRouter)
  .use('/orders', orderRouter)
  .use('/wishlist', wishlistRouter)
  .use('/reviews', reviewRouter)
  .use('/coupons', couponRouter)
  .use('/conversations', conversationRouter)

export default clientRouter;
