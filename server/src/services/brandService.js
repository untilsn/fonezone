import Brand from "../models/Brand.js";
import CustomError from "../utils/customError.js";

export const getAllBrands = async (search) => {
  let query = {};

  if (search) query.name = { $regex: search, $options: "i" };

  const brands = await Brand.find(query);
  return brands;
};

export const getBrandById = async (id) => {
  const brand = await Brand.findById(id);
  if (!brand) {
    throw new CustomError(404, "Thương hiệu không tồn tại.");
  }
  return brand;
};

export const createBrand = async (name, description) => {
  const existingBrand = await Brand.findOne({ name });
  if (existingBrand) {
    throw new CustomError(400, "Thương hiệu đã tồn tại.");
  }

  const newBrand = new Brand({ name, description });
  return await newBrand.save();
};

export const updateBrand = async (id, name, description) => {
  const brand = await Brand.findByIdAndUpdate(
    id,
    { name, description },
    { new: true }
  );
  if (!brand) {
    throw new CustomError(404, "Thương hiệu không tồn tại.");
  }
  return brand;
};

export const toogleActiveBrand = async (id) => {
  const brand = await Brand.findById(id);
  if (!brand) {
    throw new CustomError(404, "Thương hiệu không tồn tại.");
  }

  brand.isActive = !brand.isActive;
  await brand.save();
  return brand;
};

export const deleteBrand = async (id) => {
  const brand = await Brand.findByIdAndDelete(id);
  if (!brand) {
    throw new CustomError(404, "Thương hiệu không tồn tại.");
  }
};
