import jwt from "jsonwebtoken";
import config from "../config/env.js";
import generateTokens from "../utils/jwtHelper.js";
import User from "../models/User.js";
import CustomError from "../utils/customError.js";

export const verifyRefreshToken = async (refreshToken) => {
  try {
    const decoded = jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) {
      throw new CustomError(
        401,
        "Người dùng không tồn tại. Vui lòng đăng nhập lại!"
      );
    }
    const { access_token } = generateTokens({ id: user._id, role: user.role });
    return access_token;
  } catch (error) {
    throw new CustomError(
      401,
      "Refresh Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại!"
    );
  }
};
