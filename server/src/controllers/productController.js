import {
  createProduct,
  deleteProduct,
  getAllProduct, getProductById,
  updateProduct
} from "../services/productService.js";



export const getProductsController = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, sort, search, brand, category, ram, storage, color, minPrice, maxPrice } = req.query;

    const result = await getAllProduct({
      page: parseInt(page),
      limit: parseInt(limit),
      sort,
      search,
      brand,
      category,
      ram,
      storage,
      color,
      minPrice,
      maxPrice
    });

    return res.status(200).json({
      success: true,
      data: result.products,
      total: result.total,
      totalPages: result.totalPages,
      message: "Lấy danh sách sản phẩm thành công!"
    });
  } catch (error) {
    next(error);
  }
};




export const getProductByIdController = async (req, res, next) => {
  try {
    const { productId } = req.params;

    if (!productId) {
      return res.status(404).json({ success: false, message: "Thiếu mã sản phẩm" })
    }

    const result = await getProductById(productId);

    return res.status(200).json({ success: true, data: result, message: "Lấy thông tin sản phẩm thành công!" });
  } catch (error) {
    next(error);
  }
};


export const createProductController = async (req, res, next) => {
  try {
    const productData = req.body;
    const result = await createProduct(productData);

    return res.status(200).json({
      success: true,
      data: result,
      message: "Sản phẩm đã lưu thành công!",
    });
  } catch (error) {
    next(error);
  }
};

export const updateProductController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body
    const result = await updateProduct(id, updateData);

    return res.status(200).json({
      success: true,
      data: result,
      message: "Cập nhập sản phẩm thành công!",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProductController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await deleteProduct(id);

    return res.status(200).json({
      success: true,
      data: result,
      message: "Xóa sản phẩm thành công!",
    });
  } catch (error) {
    next(error);
  }
};



// export const getProductController = async (req, res, next) => {
//   try {
//     const { page, limit, sort, search } = req.query;

//     const data = await getProduct({ page, limit, sort, search });

//     return res.status(200).json({ success: true, ...data, message: "Lấy sản phẩm thành công!" });
//   } catch (error) {
//     next(error);
//   }
// };