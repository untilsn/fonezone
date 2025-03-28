import jwt from "jsonwebtoken"
import config from "../config/env.js"

const generateTokens = (user) => {
  const access_token = jwt.sign(
    { id: user._id, role: user.role },
    config.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );

  const refresh_token  = jwt.sign(
    { id: user._id },
    config.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );

  return { access_token, refresh_token };
};

export default generateTokens

