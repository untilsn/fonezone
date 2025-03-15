import express from 'express';
import validateMiddleware from '../middlewares/validateMiddleware.js';
import { productValidation, updateProductValidation } from '../validation/productValidation.js';
import {
  createProductController,
  deleteProductController,
  updateProductController
} from '../controllers/productController.js';
import { verifyAdminToken } from '../middlewares/authMiddleware.js';

const adminRouter = express.Router();

// //user
// adminRouter.get("/", isAdmin, getAllUsers);
// adminRouter.get("/:userId", isAdmin, getUserById);
// adminRouter.put("/:userId", isAdmin, updateUser);
// adminRouter.put("/:userId/role", isAdmin, changeUserRole);
// adminRouter.put("/:userId/ban", isAdmin, banUser);
// adminRouter.put("/:userId/unban", isAdmin, unbanUser);
// adminRouter.put("/:userId/reset-password", isAdmin, resetUserPassword);
// adminRouter.post("/:userId/notify", isAdmin, sendNotification);
// adminRouter.delete("/:userId", isAdmin, deleteUser);
//product
adminRouter.post('/product/create', verifyAdminToken, validateMiddleware(productValidation), createProductController);
adminRouter.patch('/product/update/:id', verifyAdminToken, validateMiddleware(updateProductValidation), updateProductController);
adminRouter.delete('/product/delete/:id', verifyAdminToken, deleteProductController);

//coupon
adminRouter.patch('/coupon/', verifyAdminToken, updateProductController);
adminRouter.patch('/coupon/:id', verifyAdminToken, updateProductController);
adminRouter.post('/coupon/update/:id', verifyAdminToken, createProductController);
adminRouter.delete('/coupon/delete/:id', verifyAdminToken, deleteProductController);


//category
adminRouter.post('/',);
adminRouter.put('/:id',);
adminRouter.delete('/:id',);
//brand
adminRouter.post('/',);
adminRouter.put('/:id',);
adminRouter.delete('/:id',);


export default adminRouter;