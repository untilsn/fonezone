import express from 'express';
import {
  createConversationController,
  getConversationsByUserController,
  getConversationByIdController,
  deleteConversationController,
  getAllConversationsForAdminController
} from '../../controllers/conversationController.js';
import { checkIdParam } from '../../middlewares/paramIdMiddleware.js';

const conversationRouter = express.Router();
const adminConversationRouter = express.Router();

//USER ROUTER
conversationRouter
  .post('/', createConversationController) // Người dùng tạo cuộc trò chuyện với admin chính
  .get('/', getConversationsByUserController) // Người dùng xem tất cả cuộc trò chuyện của chính mình
  .get('/:id', checkIdParam, getConversationByIdController) // Người dùng lấy chi tiết cuộc trò chuyện theo ID

//ADMIN ROUTER
adminConversationRouter
  .get('/', getAllConversationsForAdminController) // Admin xem tất cả các cuộc trò chuyện (từ nhiều người dùng)
  .delete('/:id', checkIdParam, deleteConversationController) // Admin xóa một cuộc trò chuyện (nếu cần)

export { conversationRouter, adminConversationRouter };
