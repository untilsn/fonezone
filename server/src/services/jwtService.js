import jwt from "jsonwebtoken"
import config from "../config/env.js"


export const generateAccessToken = (payload) => {
  return jwt.sign(payload, config.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  })
}


export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, config.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  })
}


export const verifyRefreshToken = (refreshToken) => {
  return new Promise((resolve, reject) => {
    jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return reject(new Error("Refresh Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại!"));
      }
      const newAccessToken = generateAccessToken({ id: decoded.id, isAdmin: decoded.isAdmin });

      resolve(newAccessToken);
    });
  });
};
