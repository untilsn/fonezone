import Category from "../models/Category.js";
import CustomError from "../utils/customError.js";

export const getAllCategories = async () => {
  return await Category.find();
};

export const getCategoryById = async (id) => {
  const category = await Category.findById(id);
  if (!category) {
    throw new CustomError(404, "Danh mục không tồn tại.");
  }
  return category;
};

export const createCategory = async (name) => {
  const existingCategory = await Category.findOne({ name });
  if (existingCategory) {
    throw new CustomError(400, "Danh mục đã tồn tại.");
  }

  const newCategory = new Category({ name });
  return await newCategory.save();
};

export const updateCategory = async (id, name) => {
  const category = await Category.findByIdAndUpdate(id, { name }, { new: true });
  if (!category) {
    throw new CustomError(404, "Danh mục không tồn tại.");
  }
  return category;
};

export const deleteCategory = async (id) => {
  const category = await Category.findByIdAndDelete(id);
  if (!category) {
    throw new CustomError(404, "Danh mục không tồn tại.");
  }
};
