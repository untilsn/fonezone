import Category from "../models/Category.js"
import latinize from "latinize"
import slugify from "slugify"








export const getByIdCategory = async (name) => {
  if (!name.trim()) throw new Error("Tên danh mục không được để trống.");

  const normalizedName = latinize(name).trim().replace(/\s+/g, " ").toLowerCase();
  const slug = slugify(normalizedName, { lower: true, strict: true });

  const existingCategory = await Category.findOne({ slug });
  if (existingCategory) {
    throw new Error("Danh mục đã tồn tại.");
  }

  await Category.create({ name: name.trim(), slug });
}

export const addCategory = async (name) => {
  if (!name.trim()) throw new Error("Tên danh mục không được để trống.");

  const normalizedName = latinize(name).trim().replace(/\s+/g, " ").toLowerCase();
  const slug = slugify(normalizedName, { lower: true, strict: true });

  const existingCategory = await Category.findOne({ slug });
  if (existingCategory) {
    throw new Error("Danh mục đã tồn tại.");
  }

  const category = await Category.create({ name: name.trim(), slug });
  return { category }
}

