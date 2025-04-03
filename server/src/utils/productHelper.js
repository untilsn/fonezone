import CustomError from "./customError.js";


export function calculateDiscountPrice(price, discount) {
  if (typeof price !== "number" || price <= 0) {
    throw new CustomError(400, "Giá sản phẩm không hợp lệ.");
  }
  if (typeof discount !== "number" || discount < 0) {
    throw new CustomError(400, "Mức giảm giá không hợp lệ.");
  }

  return Math.round(price - (price * discount) / 100);
}


export function isValidFlashSale(flashSaleStart, flashSaleEnd) {
  if (!flashSaleStart || !flashSaleEnd) {
    throw new CustomError(400, "Thiếu thời gian bắt đầu hoặc kết thúc flash sale.");
  }

  const startDate = new Date(flashSaleStart);
  const endDate = new Date(flashSaleEnd);

  if (isNaN(startDate) || isNaN(endDate)) {
    throw new CustomError(400, "Thời gian flash sale không hợp lệ.");
  }

  if (startDate >= endDate) {
    throw new CustomError(400, "Thời gian kết thúc phải lớn hơn thời gian bắt đầu.");
  }

  return true;
}
