import { addWishlist, clearWishlist, getWishlist, removeWishlist } from "../services/wishlistService.js";


export const getWishlistController = async (req, res, next) => {
  try {
    const result = await getWishlist(req.user.id);

    return res.status(200).json({
      success: true,
      data: result,
      message: "Lấy danh sách wishlist thành công!",
    });
  } catch (error) {
    next(error);
  }
};


export const addWishlistController = async (req, res, next) => {
  try {
    const result = await addWishlist(req.user.id, req.body.productId);

    return res.status(200).json({
      success: true,
      data: result,
      message: "Sản phẩm đã được thêm vào wishlist!",
    });
  } catch (error) {
    next(error);
  }
};


export const removeWishlistController = async (req, res, next) => {
  try {
    const result = await removeWishlist(req.user.id, req.params.productId);

    return res.status(200).json({
      success: true,
      data: result,
      message: "Sản phẩm đã được xoá khỏi wishlist!",
    });
  } catch (error) {
    next(error);
  }
};


export const clearWishlistController = async (req, res, next) => {
  try {
    const result = await clearWishlist(req.user.id);

    return res.status(200).json({
      success: true,
      data: result,
      message: "Xóa toàn bộ sản phẩm trong wishlist thành công!",
    });
  } catch (error) {
    next(error);
  }
};