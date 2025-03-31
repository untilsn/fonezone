import { createOrder, deleteOrder, getAllOrders, getUserOrders, updateOrderStatus } from '../services/orderService.js';

// Tạo đơn hàng (Đã có validate middleware)
export const createOrderController = async (req, res, next) => {
  try {
    const result = await createOrder(req.body);

    return res.status(200).json({
      success: true,
      data: result,
      message: "Xử lý thành công!",
    });
  } catch (error) {
    next(error);
  }
};

// Lấy tất cả đơn hàng của người dùng (Cần kiểm tra userId)
export const getUserOrdersController = async (req, res, next) => {
  try {
    const { userId } = req.query; // Giả sử bạn truyền userId qua query string

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Không tìm thấy User ID. Vui lòng đăng nhập lại!",
      });
    }

    const result = await getUserOrders(userId)

    return res.status(200).json({
      success: true,
      data: result,
      message: "Lấy đơn hàng thành công!",
    });
  } catch (error) {
    next(error);
  }
};

// Lấy chi tiết đơn hàng theo ID (Cần kiểm tra orderId)
export const getOrderByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await getOrderById(id);

    return res.status(200).json({
      success: true,
      data: result,
      message: "Lấy đơn hàng thành công!",
    });
  } catch (error) {
    next(error);
  }
};

// Lấy tất cả đơn hàng (Admin, không cần validate)
export const getAllOrdersController = async (req, res, next) => {
  try {
    const result = await getAllOrders();

    return res.status(200).json({
      success: true,
      data: result,
      message: "Lấy tất cả đơn hàng thành công!",
    });
  } catch (error) {
    next(error);
  }
};

// Cập nhật trạng thái đơn hàng (Đã có validate middleware)
export const updateOrderStatusController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const result = await updateOrderStatus(id, status);

    return res.status(200).json({
      success: true,
      data: result,
      message: "Cập nhật trạng thái thành công!",
    });
  } catch (error) {
    next(error);
  }
};

// Xóa đơn hàng (Cần kiểm tra orderId)
export const deleteOrderController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await deleteOrder(id);

    return res.status(200).json({
      success: true,
      data: result,
      message: "Xóa đơn hàng thành công!",
    });
  } catch (error) {
    next(error);
  }
};
