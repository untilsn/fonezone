import express from 'express';
import {
  changePasswordController, deleteUserController, getAllUsersController,
  getUserByIdController, getUserController, updateUserByAdminController,
  updateUserController
} from '../../controllers/userController.js';

const userRouter = express.Router();
const adminUserRouter = express.Router();

/* USER AUTH ROUTES */
userRouter
  .get('/', getUserController) // Lấy thông tin người dùng
  .patch('/update', updateUserController) // Người dùng cập nhật thông tin cá nhân
  .post('/change-password', changePasswordController); // Người dùng đổi mật khẩu

/* ADMIN AUTH ROUTES */
adminUserRouter
  .get('/', getAllUsersController) // Admin lấy danh sách tất cả người dùng
  .get('/:id', getUserByIdController) // Admin lấy thông tin người dùng theo ID
  .patch('/:id', updateUserByAdminController) // Admin cập nhật thông tin người dùng theo ID
  .delete('/:id', deleteUserController); // Admin xóa người dùng theo ID

export { userRouter, adminUserRouter };
