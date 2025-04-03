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
  .use('/products', isAdmin, adminProductRouter)
  .use('/categories', isAdmin, adminCategoryRouter)
  .use('/brands', isAdmin, adminBrandRouter)
  .use('/blogs', isAdmin, adminBlogRouter)
  .use('/flash-sales', isAdmin, adminFlashsaleRouter)
  .use('/users', isAdmin, adminUserRouter)
  .use('/orders', isAdmin, adminOrderRouter)
  .use('/coupons', isAdmin, adminCouponRouter)
  .use('/reviews', isAdmin, adminReviewRouter);

export default adminRouter;