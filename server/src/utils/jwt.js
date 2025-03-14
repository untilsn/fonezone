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
