import Order from "../models/Order.js";
import CustomError from "../utils/customError.js";

export const createOrder = async (orderData) => {
  const newOrder = await Order.create(orderData);
  return newOrder;
};

export const getUserOrders = async (userId) => {
  const orders = await Order.find({ userId });
  if (!orders.length) throw new CustomError(404, "Không tìm thấy đơn hàng nào!");

  return orders;
};

export const getOrderById = async (orderId) => {
  const order = await Order.findById(orderId);
  if (!order) throw new CustomError(404, "Không tìm thấy đơn hàng!");

  return order;
};

export const getAllOrders = async () => {
  const orders = await Order.find();
  if (!orders.length) throw new CustomError(404, "Không tìm thấy đơn hàng nào!");

  return orders;
};

export const updateOrderStatus = async (orderId, status) => {
  if (!status) {
    throw new CustomError(400, "Trạng thái không được để trống!");
  }

  const updatedOrder = await Order.findByIdAndUpdate(
    orderId,
    { status },
    { new: true, runValidators: true }
  );

  if (!updatedOrder) throw new CustomError(404, "Không tìm thấy đơn hàng!");

  return updatedOrder;
};

export const deleteOrder = async (orderId) => {
  const deletedOrder = await Order.findByIdAndUpdate(
    orderId,
    { isDeleted: true },
    { new: true }
  );

  if (!deletedOrder) throw new CustomError(404, "Không tìm thấy đơn hàng!");

  return deletedOrder;
};
