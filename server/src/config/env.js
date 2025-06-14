import dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: process.env.PORT || 5000,
  SALT: process.env.SALT || 10,
  NODE_ENV: process.env.NODE_ENV || "development",
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:3000",
  ADMIN_URL: process.env.ADMIN_URL || "http://localhost:4000",
  MONGO_DB: process.env.MONGO_DB,
  //google auth
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "",
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || "",
  GOOGLE_REDIRECT_URL_USER: process.env.GOOGLE_REDIRECT_URL_USER || "",
  GOOGLE_REDIRECT_URL_ADMIN: process.env.GOOGLE_REDIRECT_URL_ADMIN || "",
  // send email
  EMAIL_CLIENT: process.env.EMAIL_CLIENT || "",
  EMAIL_APP_PASSWORD: process.env.EMAIL_APP_PASSWORD || "",
  // jwt
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  // CLOUDINARY dev.op
  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  CLOUDINARY_BASE_FOLDER: process.env.CLOUDINARY_BASE_FOLDER, //(optinonal)
};

export default config;
