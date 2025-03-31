import express from 'express';
import { isAdmin } from '../middlewares/authMiddleware.js';
import { adminCategoryRouter } from './modules/categoryRouter.js';
import { adminBrandRouter } from './modules/brandRouter.js';
import { adminBlogRouter } from './modules/blogRouter.js';
import { adminUserRouter } from './modules/userRouter.js';
import { adminOrderRouter } from './modules/orderRouter.js';
import { adminReviewRouter } from './modules/reviewRouter.js';
import { adminFlashsaleRouter } from './modules/flashsaleRouter.js';
import { adminCouponRouter } from './modules/couponRouter.js';
import { adminProductRouter } from './modules/productRouter.js';

const adminRouter = express.Router();

adminRouter
  .use(isAdmin)
  .use('/products', adminProductRouter)
  .use('/categories', adminCategoryRouter)
  .use('/brands', adminBrandRouter)
  .use('/blogs', adminBlogRouter)
  .use('/flash-sales', adminFlashsaleRouter)
  .use('/users', adminUserRouter)
  .use('/orders', adminOrderRouter)
  .use('/coupons', adminCouponRouter)
  .use('/reviews', adminReviewRouter);

export default adminRouter;