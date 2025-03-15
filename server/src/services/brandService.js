import errorHandle from "../middlewares/errorMiddleware.js";
import Brand from "../models/Brand.js";

export const getAllBrands = async () => {
  return await Brand.find();
};

export const getBrandById = async (id) => {
  const brand = await Brand.findById(id);
  if (!brand) {
    throw new errorHandle(404, "Thương hiệu không tồn tại.");
  }
  return brand;
};

export const createBrand = async (name) => {
  const existingBrand = await Brand.findOne({ name });
  if (existingBrand) {
    throw new errorHandle(400, "Thương hiệu đã tồn tại.");
  }

  const newBrand = new Brand({ name });
  return await newBrand.save();
};

export const updateBrand = async (id, name) => {
  const brand = await Brand.findByIdAndUpdate(id, { name }, { new: true });
  if (!brand) {
    throw new errorHandle(404, "Thương hiệu không tồn tại.");
  }
  return brand;
};

export const deleteBrand = async (id) => {
  const brand = await Brand.findByIdAndDelete(id);
  if (!brand) {
    throw new errorHandle(404, "Thương hiệu không tồn tại.");
  }
};
