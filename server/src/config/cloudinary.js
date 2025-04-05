import { v2 as cloudinary } from "cloudinary";
import config from "./env.js";

cloudinary.config({
  cloud_name: config.CLOUDINARY_NAME,
  api_key: config.CLOUDINARY_API_KEY,
  api_secret: config.CLOUDINARY_API_SECRET,
});

export const BASE_FOLDER = config.CLOUDINARY_BASE_FOLDER;
export default cloudinary;
