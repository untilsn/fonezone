import jwt from "jsonwebtoken";
import config from "../config/env.js";
import CustomError from "../utils/customError.js";

const generateTokens = (user) => {
  try {
    const access_token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      config.ACCESS_TOKEN_SECRET,
      { expiresIn: "30m" }
    );

    const refresh_token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      config.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" }
    );

    return { access_token, refresh_token };
  } catch (error) {
    throw new CustomError(500, "Error generating tokens: " + error.message);
  }
};

export default generateTokens;
