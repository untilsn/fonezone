import { getUserProfile } from "../services/userService.js";

// *get current user
export const getUserController = async (req, res, next) => {
  try {
    const userId = req.user.id

    const result = await getUserProfile(userId);

    return res.status(200).json({ success: true, data: result, message: "Lấy thông tin người dùng thành công!" });
  } catch (error) {
    next(error)
  }
};

export const updateUserController = async (req, res, next) => {
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



export const changePasswordController = async (req, res, next) => {
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
export const getAllUsersController = async (req, res, next) => {
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
export const getUserByIdController = async (req, res, next) => {
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
export const updateUserByAdminController = async (req, res, next) => {
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
export const deleteUserController = async (req, res, next) => {
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
