

export const getAllBlogsController = async (req, res, next) => {
  try {
    const { someData } = req.body;

    return res.status(200).json({
      success: true,
      data: result,
      message: "Xử lý thành công!",
    });
  } catch (error) {
    next(error);
  }
};


export const getBlogByIdController = async (req, res, next) => {
  try {
    const { someData } = req.body;

    return res.status(200).json({
      success: true,
      data: result,
      message: "Xử lý thành công!",
    });
  } catch (error) {
    next(error);
  }
};


export const createBlogController = async (req, res, next) => {
  try {
    const { someData } = req.body;

    return res.status(200).json({
      success: true,
      data: result,
      message: "Xử lý thành công!",
    });
  } catch (error) {
    next(error);
  }
};


export const updateBlogController = async (req, res, next) => {
  try {
    const { someData } = req.body;

    return res.status(200).json({
      success: true,
      data: result,
      message: "Xử lý thành công!",
    });
  } catch (error) {
    next(error);
  }
};


export const deleteBlogController = async (req, res, next) => {
  try {
    const { someData } = req.body;

    return res.status(200).json({
      success: true,
      data: result,
      message: "Xử lý thành công!",
    });
  } catch (error) {
    next(error);
  }
};
