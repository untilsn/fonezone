import CustomError from "../utils/customError.js";

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.status).json({ success: false, message: err.message });
  }

  return res.status(500).json({ success: false, message: "Lỗi máy chủ!" });
};

export default errorHandler;
