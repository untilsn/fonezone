import express from 'express';
import {
  changePasswordController, deleteUserController, getAllUsersController,
  getUserByIdController, getUserController, updateUserAvatarController,
  updateUserByAdminController, updateUserController
} from '../../controllers/userController.js';
import validate from '../../middlewares/validateMiddleware.js';
import { changePasswordValidation, updateUserValidation } from '../../validation/userValidation.js';
import { checkIdParam } from '../../middlewares/paramIdMiddleware.js';
import { uploadMiddleware } from '../../middlewares/uploadMiddleware.js';
import { avatarUpload } from '../../config/multer.js';

const userRouter = express.Router();
const adminUserRouter = express.Router();

/* USER AUTH ROUTES */
userRouter
  .get('/', getUserController) // Lấy thông tin người dùng
  .patch("/avatar", uploadMiddleware(avatarUpload, 1), updateUserAvatarController)
  .patch('/update', validate(updateUserValidation), updateUserController) // Người dùng cập nhật thông tin cá nhân
  .post('/change-password', validate(changePasswordValidation), changePasswordController); // Người dùng đổi mật khẩu

/* ADMIN AUTH ROUTES */
adminUserRouter
  .get('/', getAllUsersController) // Admin lấy danh sách tất cả người dùng
  .get('/:id', checkIdParam, getUserByIdController) // Admin lấy thông tin người dùng theo ID
  .patch('/:id', checkIdParam, validate(updateUserValidation), updateUserByAdminController) // Admin cập nhật thông tin người dùng theo ID
  .delete('/:id', checkIdParam, deleteUserController); // Admin xóa người dùng theo ID

export { userRouter, adminUserRouter };
