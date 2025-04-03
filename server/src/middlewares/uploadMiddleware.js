import { avatarUpload, productUpload, blogUpload } from "../config/multer.js";


export const uploadMiddleware = (uploadType, maxCount = 1) => {
  return (req, res, next) => {
    if (maxCount === 1) {
      uploadType.single("file")(req, res, (err) => {
        if (err) {
          return res.status(400).json({ success: false, message: err.message });
        }
        next();
      });
    } else {
      uploadType.array("file", maxCount)(req, res, (err) => {
        if (err) {
          return res.status(400).json({ success: false, message: err.message });
        }
        next();
      });
    }
  };
};
