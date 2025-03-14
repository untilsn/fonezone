import CustomError from "../utils/customError.js";

const errorHandler = (err, req, res, next) => {
  console.error(err)

  if (err instanceof CustomError) {
    return res.status(err.status).json({ success: false, message: err.message });
  }

  return res.status(500).json({ success: false, message: "Lỗi máy chủ!", error: err });
};

export default errorHandler;
