import multer from "multer";
import path from "path";
import fs from "fs";

// Hàm cấu hình storage động theo loại upload
const storageConfig = (folder) =>
  multer.diskStorage({
    destination: (req, file, cb) => {
      const dir = `uploads/tmp/`; // Đảm bảo đường dẫn tồn tại
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true }); // Tạo thư mục nếu chưa có
      }
      cb(null, dir); // Lưu vào thư mục tạm thời
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname); // Lấy phần mở rộng (.jpg, .png,...)
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`); // Đặt tên file theo kiểu: avatar-123456.jpg
    },
  });

// Kiểm tra file hợp lệ
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Chỉ chấp nhận file ảnh (.jpg, .jpeg, .png, .webp)!"), false);
  }
};

// Giới hạn dung lượng file: 2MB
const limits = { fileSize: 4 * 1024 * 1024 }; // 2MB

// Xuất ra cấu hình multer theo từng loại upload
export const avatarUpload = multer({
  storage: storageConfig("avatars"),
  fileFilter,
  limits,
});
export const productUpload = multer({
  storage: storageConfig("products"),
  fileFilter,
  limits,
});
export const blogUpload = multer({
  storage: storageConfig("blogs"),
  fileFilter,
  limits,
});
