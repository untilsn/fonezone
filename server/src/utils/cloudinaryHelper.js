import cloudinary from "../config/cloudinary.js";
import CustomError from "./customError.js";
import fs from "fs";

export const uploadImage = async (filePath, folder) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder,
    });

    fs.unlinkSync(filePath);

    return {
      url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (error) {
    console.error("❌ Cloudinary upload error:", error);
    throw new CustomError(500, "Upload ảnh lên Cloudinary thất bại.");
  }
};

export const deleteImage = async (publicId) => {
  try {
    if (!publicId)
      throw new CustomError(400, "Không tìm thấy public_id ảnh để xóa.");

    const result = await cloudinary.uploader.destroy(publicId);

    if (result.result !== "ok") {
      throw new CustomError(500, "Không thể xóa ảnh từ Cloudinary.");
    }

    return result;
  } catch (error) {
    console.error("❌ Cloudinary delete error:", error);
    throw new CustomError(500, "Không thể xóa ảnh từ Cloudinary.");
  }
};

export const updateImage = async (oldImagePublicId, filePath, folder) => {
  try {
    if (oldImagePublicId) await deleteImage(oldImagePublicId);

    return await uploadImage(filePath, folder);
  } catch (error) {
    console.error("❌ Cloudinary update error:", error);
    throw new CustomError(500, "Cập nhật ảnh lên Cloudinary thất bại.");
  }
};
