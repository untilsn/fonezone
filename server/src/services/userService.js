import cloudinary from "../config/cloudinary.js";
import User from "../models/User.js";
import CustomError from "../utils/customError.js";
import fs from "fs";


export const updateUserAvatar = async (userId, filePath) => {
  // Upload ảnh lên Cloudinary
  const result = await cloudinary.uploader.upload(filePath, {
    folder: "avatars",
    public_id: `avatar_${userId}`,
    overwrite: true,
  });

  // Xóa file sau khi upload thành công
  fs.unlink(filePath, (err) => {
    if (err) console.error("Error deleting file:", err);
  });

  // Cập nhật URL avatar mới vào database
  const user = await User.findByIdAndUpdate(
    userId,
    { avatar: result.secure_url },
    { new: true }
  );

  if (!user) {
    throw new CustomError(404, "Không tìm thấy người dùng!");
  }

  return user;
};



export const getUserProfile = async (userId) => {
  const user = await User.findById(userId).select("-password")
  if (!user) {
    throw new CustomError(404, "Tài khoản người dùng không tồn tại!");
  }
  return user
}
