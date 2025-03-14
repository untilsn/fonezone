import jwt from "jsonwebtoken";
import config from "../config/env.js";

const extractToken = (req) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }
  return authHeader.split(" ")[1];
};

export const verifyAdminToken = (req, res, next) => {
  const token = extractToken(req);
  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
    console.log(decoded)
    if (decoded.role !== "admin") {
      return res.status(403).json({ success: false, message: "Bạn không có quyền truy cập!" });
    }

    req.user = { id: decoded.id, role: decoded.role };
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: "Token không hợp lệ hoặc đã hết hạn!" });
  }
};

export const verifyUserToken = (req, res, next) => {
  const token = extractToken(req);
  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
    console.log(decoded)
    req.user = { id: decoded.id, role: decoded.role };
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: "Token không hợp lệ hoặc đã hết hạn!" });
  }
};
