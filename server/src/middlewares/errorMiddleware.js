import CustomError from "../utils/customError.js";

const errorHandle = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.status).json({
      success: false,
      message: err.message,
    });
  }
  console.log(err);
  return res
    .status(500)
    .json({ success: false, message: "Lỗi máy chủ!", error: err });
};

export default errorHandle;
