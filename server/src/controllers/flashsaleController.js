import {
  createFlashSale,
  deleteFlashSale,
  getActiveFlashSale,
  getAllFlashSales,
  getFlashSaleById,
  updateFlashSale
} from "../services/flashsaleService.js"


export const getAllFlashSalesController = async (req, res, next) => {
  try {
    const flashSales = await getAllFlashSales();
    res.json(flashSales);
  } catch (error) {
    next(error);
  }
};

export const getActiveFlashSaleController = async (req, res, next) => {
  try {
    const flashSale = await getActiveFlashSale();
    if (!flashSale) {
      return res.status(404).json({ message: "Không có Flash Sale nào đang hoạt động." });
    }
    res.json(flashSale);
  } catch (error) {
    next(error);
  }
};

export const getFlashSaleByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const flashSale = await getFlashSaleById(id);
    res.json(flashSale);
  } catch (error) {
    next(error);
  }
};

export const createFlashSaleController = async (req, res, next) => {
  try {
    const newFlashSale = await createFlashSale(req.body);
    res.status(201).json(newFlashSale);
  } catch (error) {
    next(error);
  }
};

export const updateFlashSaleController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedFlashSale = await updateFlashSale(id, req.body);
    res.json(updatedFlashSale);
  } catch (error) {
    next(error);
  }
};

export const deleteFlashSaleController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteFlashSale(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
