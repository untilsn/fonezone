import Category from "../models/Category.js";
import { addCategory } from "../services/categoryService.js";

export const getAllCategoryController = async (req, res) => {
  try {
    const result = await Category.find()

    return res.status(200).json({
      success: true,
      message: "Thành công",
      data: result
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Lỗi máy chủ"
    });
  }
};

export const getCategoryByIdController = async (req, res) => {
  try {
    const categoryId = req.params.id

    if (!categoryId) {
      return res.status(400).json({ success: false, message: "Thiếu id của danh mục!" });
    }
    return res.status(200).json({
      success: true,
      message: "Thành công",
      data: null
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Lỗi máy chủ"
    });
  }
};


export const addCategoryController = async (req, res) => {
  try {
    const { name } = req.body

    if (!name) {
      return res.status(400).json({ success: false, message: "Bổ sung tên danh mục!" });
    }

    const result = await addCategory(name)

    return res.status(200).json({
      success: true,
      message: "Thêm danh mục thành công",
      data: result
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Lỗi máy chủ"
    });
  }
};



export const updateCategoryController = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Thành công",
      data: null
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Lỗi máy chủ"
    });
  }
};

export const deleteCategoryController = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Thành công",
      data: null
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Lỗi máy chủ"
    });
  }
};