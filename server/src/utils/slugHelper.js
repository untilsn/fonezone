import CustomError from "../utils/customError.js";

export const generalSlug = (name) => {
  if (!name || typeof name !== "string") {
    throw new CustomError(400, "Tên không hợp lệ. Vui lòng nhập chuỗi hợp lệ.");
  }

  const slug = slugify(latinize(name), { lower: true, trim: true });

  if (!slug) {
    throw new CustomError(400, "Tên không thể chỉ chứa ký tự đặc biệt hoặc khoảng trắng.");
  }

  return slug;
};
