export const createReviewController = async (req, res, next) => {
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
export const getReviewsByProductOrBlogController = async (req, res, next) => {
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
export const getReviewByIdController = async (req, res, next) => {
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
export const updateReviewController = async (req, res, next) => {
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
export const deleteReviewController = async (req, res, next) => {
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
export const approveReviewController = async (req, res, next) => {
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
