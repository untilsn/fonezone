import express from 'express';
import {
  createConversationController,
  getConversationsByUserController,
  getConversationByIdController,
  deleteConversationController,
  getAllConversationsForAdminController
} from '../controllers/conversationController.js';
import { isAdmin, isUser } from '../middlewares/authMiddleware.js';

const conversationRouter = express.Router();

/* USER ROUTES */
// Người dùng tạo cuộc trò chuyện với admin chính
conversationRouter.post('/create', isUser, createConversationController);

// Người dùng xem các cuộc trò chuyện của chính mình
conversationRouter.get('/user', isUser, getConversationsByUserController);

// Người dùng lấy chi tiết cuộc trò chuyện theo ID
conversationRouter.get('/:id', isUser, getConversationByIdController);


/* ADMIN ROUTES */
// Admin xem tất cả các cuộc trò chuyện (từ nhiều người dùng)
conversationRouter.get('/admin/all', isAdmin, getAllConversationsForAdminController);

// Admin xóa một cuộc trò chuyện (nếu cần)
conversationRouter.delete('/delete/:id', isAdmin, deleteConversationController);

export default conversationRouter;
