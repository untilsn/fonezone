import {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand,
  toogleActiveBrand,
} from "../services/brandService.js";

export const getAllBrandsController = async (req, res, next) => {
  try {
    const { search } = req.query;

    const brands = await getAllBrands(search);
    return res.status(200).json({
      success: true,
      data: brands,
      message: "Lấy danh sách thương hiệu thành công!",
    });
  } catch (error) {
    next(error);
  }
};

export const getBrandByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Thiếu mã thương hiệu" });
    }

    const brand = await getBrandById(id);
    return res.status(200).json({
      success: true,
      data: brand,
      message: "Lấy thông tin thương hiệu thành công!",
    });
  } catch (error) {
    next(error);
  }
};

export const createBrandController = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    const newBrand = await createBrand(name, description);
    return res.status(201).json({
      success: true,
      data: newBrand,
      message: "Thêm thương hiệu thành công!",
    });
  } catch (error) {
    next(error);
  }
};

export const updateBrandController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const updatedBrand = await updateBrand(id, name, description);
    return res.status(200).json({
      success: true,
      data: updatedBrand,
      message: "Cập nhật thương hiệu thành công!",
    });
  } catch (error) {
    next(error);
  }
};

export const toogleActiveBrandController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const brand = await toogleActiveBrand(id);
    res.status(200).json({
      message: `Đã ${
        brand.isActive ? "kích hoạt" : "vô hiệu hóa"
      } thương hiệu.`,
      isActive: brand.isActive,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBrandController = async (req, res, next) => {
  try {
    const { id } = req.params;

    await deleteBrand(id);
    return res
      .status(200)
      .json({ success: true, message: "Xóa thương hiệu thành công!" });
  } catch (error) {
    next(error);
  }
};
