// Middleware cho validate cơ bản (áp dụng cho JSON requests)
const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details.map((detail) => detail.message).join(", "),
      });
    }
    next();
  };
};

// Middleware validate + parse form data (multipart/form-data)
const validateFormData = (schema) => {
  return (req, res, next) => {
    try {
      // 1. Parse các trường JSON trong body nếu có
      for (const key in req.body) {
        if (typeof req.body[key] === "string") {
          try {
            const parsedData = JSON.parse(req.body[key]);
            // Nếu là đối tượng hoặc mảng, thì gắn lại vào req.body
            if (Array.isArray(parsedData) || typeof parsedData === "object") {
              req.body[key] = parsedData;
            }
          } catch (err) {
            // Nếu không thể parse được, giữ nguyên giá trị
            // Chẳng hạn trường hợp chuỗi không phải là JSON hợp lệ
          }
        }
      }

      // 2. Validate các trường trong body đã parse qua Joi schema
      const { error, value } = schema.validate(req.body, { abortEarly: false });
      if (error) {
        return res.status(400).json({
          success: false,
          message: error.details.map((detail) => detail.message).join(", "),
        });
      }

      // Cập nhật lại req.body với dữ liệu đã validated (nếu cần)
      req.body = value;

      // 3. Tiến hành xử lý tiếp
      next();
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: "Lỗi trong quá trình xử lý form data",
      });
    }
  };
};

// Exports các middleware validate chung và validate form data
export { validate, validateFormData };
