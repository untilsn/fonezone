import express from 'express';
import {
  createFlashSaleController,
  deleteFlashSaleController,
  getActiveFlashSaleController,
  getAllFlashSalesController,
  getFlashSaleByIdController,
  updateFlashSaleController

} from '../controllers/flashsaleController.js';


const flashsaleRouter = express.Router();

flashsaleRouter.get('/', getAllFlashSalesController);
flashsaleRouter.get('/:id', getFlashSaleByIdController);
flashsaleRouter.get('/active', getActiveFlashSaleController);
flashsaleRouter.post('/create', createFlashSaleController);
flashsaleRouter.put('/update/:id', updateFlashSaleController);
flashsaleRouter.delete('/delete/:id', deleteFlashSaleController);

export default flashsaleRouter;