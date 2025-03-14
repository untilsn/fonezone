import jwt from "jsonwebtoken"
import config from "../config/env.js"


export const verifyRefreshToken = (refreshToken) => {
  return new Promise((resolve, reject) => {
    jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return reject(new Error("Refresh Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại!"));
      }
      console.log(decoded)
      const newAccessToken = generateAccessToken({ id: decoded.id, role: decoded.role });

      resolve(newAccessToken);
    });
  });
};
