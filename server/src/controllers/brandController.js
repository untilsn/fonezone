import {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand
} from "../services/brandService.js";

export const getAllBrandsController = async (req, res, next) => {
  try {
    const brands = await getAllBrands();
    return res.status(200).json({ success: true, data: brands, message: "Lấy danh sách thương hiệu thành công!" });
  } catch (error) {
    next(error);
  }
};

export const getBrandByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ success: false, message: "Thiếu mã thương hiệu" });
    }

    const brand = await getBrandById(id);
    return res.status(200).json({ success: true, data: brand, message: "Lấy thông tin thương hiệu thành công!" });
  } catch (error) {
    next(error);
  }
};

export const createBrandController = async (req, res, next) => {
  try {
    const { name } = req.body;
    
    const newBrand = await createBrand(name);
    return res.status(201).json({ success: true, data: newBrand, message: "Thêm thương hiệu thành công!" });
  } catch (error) {
    next(error);
  }
};

export const updateBrandController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updatedBrand = await updateBrand(id, name);
    return res.status(200).json({ success: true, data: updatedBrand, message: "Cập nhật thương hiệu thành công!" });
  } catch (error) {
    next(error);
  }
};

export const deleteBrandController = async (req, res, next) => {
  try {
    const { id } = req.params;

    await deleteBrand(id);
    return res.status(200).json({ success: true, message: "Xóa thương hiệu thành công!" });
  } catch (error) {
    next(error);
  }
};
