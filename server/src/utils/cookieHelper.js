import config from "../config/env.js";

const isProduction = config.NODE_ENV === "production";

export const setRefreshTokenCookie = (res, refreshToken) => {
  res.cookie("token", refreshToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, 
  });
};
