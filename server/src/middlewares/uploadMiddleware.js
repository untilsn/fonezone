import { avatarUpload, productUpload } from "../config/multer.js";

// Middleware upload avatar
export const uploadAvatarMiddleware = (req, res, next) => {
  avatarUpload.single("avatar")(req, res, (err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
    next();
  });
};

// Middleware upload nhiều ảnh sản phẩm
export const uploadProductMiddleware = (req, res, next) => {
  productUpload.array("images", 5)(req, res, (err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
    next();
  });
};
