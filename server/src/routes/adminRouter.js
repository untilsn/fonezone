import express from 'express';
import validateMiddleware from '../middlewares/validateMiddleware.js';
import { productSchema } from '../validation/productSchema.js';
import {
  createProductController,
  updateProductController
} from '../controllers/productController.js';

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
adminRouter.post('/product/create', validateMiddleware(productSchema), createProductController);
adminRouter.put('/product/update/:id', validateMiddleware(productSchema), updateProductController);
adminRouter.delete('/product/delete/:id', createProductController);
//category
adminRouter.post('/',);
adminRouter.put('/:id',);
adminRouter.delete('/:id',);
//brand
adminRouter.post('/',);
adminRouter.put('/:id',);
adminRouter.delete('/:id',);


export default adminRouter;