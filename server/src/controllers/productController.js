import { getAllProducts } from "../services/productService.js";


export const getAllProductsController = async (req, res, next) => {
  try {
    const { page, limit, sort, search } = req.query;

    const data = await getAllProducts({ page, limit, sort, search });

    return res.status(200).json({ success: true, ...data });
  } catch (error) {
    next(error);
  }
};




export const getProductByIdController = async (req, res, next) => {
  try {
    const { someData } = req.body;

    const result = await someServiceFunction(someData);

    return res.status(200).json({
      success: true,
      data: result,
      message: "Xử lý thành công!",
    });
  } catch (error) {
    next(error); 
  }
};


export const createProductController = async (req, res, next) => {
  try {
    const { someData } = req.body;

    const result = await someServiceFunction(someData);

    return res.status(200).json({
      success: true,
      data: result,
      message: "Xử lý thành công!",
    });
  } catch (error) {
    next(error); 
  }
};
