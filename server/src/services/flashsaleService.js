import Flashsale from "../models/Flashsale.js";
import Product from "../models/Product.js";
import CustomError from "../utils/customError.js";


export const getAllFlashSales = async () => {
  return await Flashsale.find().populate("products");
};

export const getActiveFlashSale = async () => {
  const now = new Date();
  return await Flashsale.findOne({
    start: { $lte: now },
    end: { $gte: now },
  }).populate("products");
};

export const getFlashSaleById = async (id) => {
  const flashsale = await Flashsale.findById(id).populate("products");
  if (!flashsale) throw new CustomError(404, "Flash Sale không tồn tại.");
  return flashsale;
};


export const createFlashSale = async (data) => {
  const { products, start, end } = data;

  const checkFlashsaleDate = await Flashsale.findOne({
    start: { $lt: new Date(end) },
    end: { $gt: new Date(start) },
  });

  if (checkFlashsaleDate) {
    throw new CustomError(400, "Thời gian Flash Sale bị trùng với một đợt khác.");
  }

  const existingProducts = await Product.find({
    _id: { $in: products },
    status: "active",
  });

  if (existingProducts.length !== products.length) {
    throw new CustomError(400, "Một số sản phẩm không tồn tại hoặc đã bị ẩn.");
  }

  return await Flashsale.create(data);
};


export const updateFlashSale = async (id, updateData) => {
  const { start, end } = updateData;

  const flashsale = await Flashsale.findById(id);
  if (!flashsale) throw new CustomError(404, "Flash Sale không tồn tại.");

  if (start && end) {
    const checkFlashsaleDate = await Flashsale.findOne({
      _id: { $ne: id },
      start: { $lt: new Date(end) },
      end: { $gt: new Date(start) },
    });

    if (checkFlashsaleDate) {
      throw new CustomError(400, "Thời gian Flash Sale bị trùng với một đợt khác.");
    }
  }

  const now = new Date();
  const status =
    now < new Date(start) ? "upcoming" : now > new Date(end) ? "expired" : "active";

  return await Flashsale.findByIdAndUpdate(id, { ...updateData, status }, { new: true });
};


export const deleteFlashSale = async (id) => {
  const flashsale = await Flashsale.findById(id);
  if (!flashsale) {
    throw new CustomError(404, "Flash Sale không tồn tại.");
  }

  if (flashsale.status === "active") {
    throw new CustomError(400, "Không thể xóa Flash Sale đang hoạt động.");
  }

  return await Flashsale.findByIdAndDelete(id);
};
