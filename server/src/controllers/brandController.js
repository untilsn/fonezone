import {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand,
} from "../services/brandService.js";


export const getAllBrandsController = async (req, res) => {
  try {
    const brands = await getAllBrands();
    res.status(200).json({ success: true, message: "Thành công", data: brands });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message || "Lỗi máy chủ" });
  }
};


export const getBrandByIdController = async (req, res) => {
  try {
    const brand = await getBrandById(req.params.id);
    if (!brand) {
      return res.status(404).json({ success: false, message: "Không tìm thấy thương hiệu" });
    }
    res.status(200).json({ success: true, message: "Thành công", data: brand });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message || "Lỗi máy chủ" });
  }
};


export const createBrandController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ success: false, message: "Tên thương hiệu là bắt buộc" });
    }

    const newBrand = await createBrand(name);
    res.status(201).json({ success: true, message: "Tạo thành công", data: newBrand });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message || "Lỗi máy chủ" });
  }
};


export const updateBrandController = async (req, res) => {
  try {
    const { name } = req.body;
    const updatedBrand = await updateBrand(req.params.id, name);

    if (!updatedBrand) {
      return res.status(404).json({ success: false, message: "Không tìm thấy thương hiệu" });
    }

    res.status(200).json({ success: true, message: "Cập nhật thành công", data: updatedBrand });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message || "Lỗi máy chủ" });
  }
};


export const deleteBrandController = async (req, res) => {
  try {
    const deletedBrand = await deleteBrand(req.params.id);

    if (!deletedBrand) {
      return res.status(404).json({ success: false, message: "Không tìm thấy thương hiệu" });
    }

    res.status(200).json({ success: true, message: "Xóa thành công" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message || "Lỗi máy chủ" });
  }
};
