import express from 'express';

const userRouter = express.Router();

userRouter.get('/:id',);
userRouter.put('/update/:id',);
// message
userRouter.post('/', sendMessage);  //(Lấy danh sách cuộc trò chuyện của user)
userRouter.get('/conversations/:userId', getConversation);  // (Lấy chi tiết cuộc trò chuyện)
userRouter.get('/:conversationId', getMessages);  //    (Gửi tin nhắn mới)
// review
userRouter.get('/reviews',);
userRouter.post('/reviews',);
userRouter.put('/reviews/:id',);
userRouter.delete('/reviews/:id',);
// change password
userRouter.post('/change-password/:id',);
// order
userRouter.get('/orders',);
userRouter.get('/orders/:id',);





export default userRouter;