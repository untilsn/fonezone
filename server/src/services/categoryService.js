import Category from "../models/Category.js";
import CustomError from "../utils/customError.js";
import { generalSlug } from '../utils/slugHelper.js'

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

export const createCategory = async (name, type) => {
  const existingCategory = await Category.findOne({ name });
  if (existingCategory) {
    throw new CustomError(400, "Danh mục đã tồn tại.");
  }
  const slug = generalSlug(name)
  const newCategory = new Category({ name, slug, type });
  return await newCategory.save();
};


export const updateCategory = async (id, updateData) => {
  if (updateCategory.name) {
    updateData.slug = generalSlug(updateData.name)
  }

  const existingCategory = await Category.findOne({ name: updateData.name });
  if (existingCategory) {
    throw new CustomError(400, "Danh mục đã tồn tại.");
  }

  const category = await Category.findByIdAndUpdate(id, updateData, { new: true });
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
