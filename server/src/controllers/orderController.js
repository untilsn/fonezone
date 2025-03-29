export const createOrderController = async (req, res, next) => {
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
export const getUserOrdersController = async (req, res, next) => {
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
export const getOrderByIdController = async (req, res, next) => {
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
export const getAllOrdersController = async (req, res, next) => {
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
export const updateOrderStatusController = async (req, res, next) => {
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
export const deleteOrderController = async (req, res, next) => {
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
