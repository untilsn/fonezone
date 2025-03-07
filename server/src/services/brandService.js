import Brand from "../models/Brand.js";


export const getAllBrands = async () => {
  return await Brand.find().sort({ createdAt: -1 }).select("name createdAt");
};


export const getBrandById = async (brandId) => {
  return await Brand.findById(brandId);
};


export const createBrand = async (name) => {
  const existingBrand = await Brand.findOne({ name });
  if (existingBrand) {
    throw new Error("Thương hiệu đã tồn tại.");
  }

  return await Brand.create({ name });
};


export const updateBrand = async (brandId, name) => {
  return await Brand.findByIdAndUpdate(brandId, { name }, { new: true });
};


export const deleteBrand = async (brandId) => {
  return await Brand.findByIdAndDelete(brandId);
};
