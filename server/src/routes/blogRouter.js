import express from 'express';

const blogRouter = express.Router();

blogRouter.get('/',);
blogRouter.get('/:id',);
blogRouter.post('/create',);
blogRouter.put('/update/:id',);
blogRouter.delete('/delete/:id',);

export default blogRouter;