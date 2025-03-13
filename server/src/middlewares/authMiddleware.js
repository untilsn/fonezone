import jwt from "jsonwebtoken"
import config from "../config/env.js";

export const authMiddlewareAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.token

    if (!token) {
      return res.status(404).json({ success: false, message: "Vui lòng đăng nhập lại" })
    }

    jwt.verify(token, config.REFRESH_TOKEN_SECRET, async (err, user) => {
      if (err) {
        return res.status(403).json({ success: false, message: "Token không hợp lệ hoặc đã hết hạn!" });
      }

      req.user = user;
      next();
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Lỗi server",
      err: err.message
    })
  }
}


export const authMiddlewareUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: No token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, config.ACCESS_TOKEN_SECRET, async (err, user) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: "Token không hợp lệ hoặc đã hết hạn!",
        });
      }

      const { id, role } = user;
      if (role === "admin" || id === userId) {
        req.user = { id, role };
        next();
      } else {
        return res.status(403).json({
          success: false,
          message: "User does not have access to this resource",
        });
      }
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Lỗi server, vui lòng thử lại sau!",
      error: err.message,
    });
  }
};



