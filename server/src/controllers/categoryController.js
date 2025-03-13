import { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from "../services/categoryService.js";

export const getAllCategoriesController = async (req, res, next) => {
  try {
    const categories = await getAllCategories();
    return res.status(200).json({ success: true, data: categories, message: "Lấy danh sách danh mục thành công!" });
  } catch (error) {
    next(error);
  }
};

export const getCategoryByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id)
    if (!id) {
      return res.status(400).json({ success: false, message: "Thiếu mã danh mục" });
    }

    const category = await getCategoryById(id);
    return res.status(200).json({ success: true, data: category, message: "Lấy thông tin danh mục thành công!" });
  } catch (error) {
    next(error);
  }
};

export const createCategoryController = async (req, res, next) => {
  try {
    const { name } = req.body;

    const newCategory = await createCategory(name);
    return res.status(201).json({ success: true, data: newCategory, message: "Thêm danh mục thành công!" });
  } catch (error) {
    next(error);
  }
};

export const updateCategoryController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!id || !name) {
      return res.status(400).json({ success: false, message: "Thiếu thông tin cập nhật" });
    }

    const updatedCategory = await updateCategory(id, name);
    return res.status(200).json({ success: true, data: updatedCategory, message: "Cập nhật danh mục thành công!" });
  } catch (error) {
    next(error);
  }
};

export const deleteCategoryController = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ success: false, message: "Thiếu mã danh mục" });
    }

    await deleteCategory(id);
    return res.status(200).json({ success: true, message: "Xóa danh mục thành công!" });
  } catch (error) {
    next(error);
  }
};
