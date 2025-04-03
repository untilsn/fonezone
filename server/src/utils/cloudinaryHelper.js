import cloudinary from "../config/cloudinary.js"
import CustomError from "./customError.js";
import fs from "fs";

const extractPublicId = (imageUrl) => {
  const parts = imageUrl.split("/");
  const publicId = parts[parts.length - 1].split(".")[0];
  return publicId;
}


// upload image
export const uploadToCloudinary = async (filePath, folder) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, { folder });

    fs.unlinkSync(filePath);

    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new CustomError(500, "Upload ảnh lên Cloudinary thất bại.");
  }
}


// delete image
export const deleteFromCoudinary = async (imageUrl,) => {
  try {
    if (!imageUrl) throw new CustomError(400, "Không tìm thấy URL ảnh để xóa.")

    const publicId = extractPublicId(imageUrl)
    await cloudinary.uploader.destroy(publicId)

  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new CustomError(500, "Không thể xóa ảnh từ Cloudinary.");
  }
}


// update image
export const updateCloudinaryImage = async (oldImageUrl, filePath, folder) => {
  try {
    if (oldImageUrl) await deleteFromCoudinary(oldImageUrl);

    return await uploadToCloudinary(filePath, folder);
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new CustomError(500, "Upload ảnh lên Cloudinary thất bại.");
  }
}





