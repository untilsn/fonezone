import express from "express";
// Controllers
import {
  forgetPasswordController,
  getUserProfileController,
  loginUserController,
  logoutController,
  refreshTokenController,
  registerUserController,
  resetPasswordController,
  verifyEmailController
} from "../controllers/authController.js";
// Middlewares
import validateMiddleware from "../middlewares/validateMiddleware.js";
import { verifyUserToken } from "../middlewares/authMiddleware.js";
import {
  loginValidation,
  registerValidation,
  verifyEmailValidation,
  forgetPasswordValidation,
  resetPasswordValidation,
} from "../validation/authValidation.js";
// Validation Schemas

const authRouter = express.Router();

// Auth Routes
authRouter.post("/login", validateMiddleware(loginValidation), loginUserController);
authRouter.post("/register", validateMiddleware(registerValidation), registerUserController);
authRouter.post("/verify-account", validateMiddleware(verifyEmailValidation), verifyEmailController);
authRouter.post("/forget-password", validateMiddleware(forgetPasswordValidation), forgetPasswordController);
authRouter.post("/reset-password", validateMiddleware(resetPasswordValidation), resetPasswordController);
authRouter.get("/profile", verifyUserToken, getUserProfileController);
authRouter.post("/refresh-token", refreshTokenController);
authRouter.post("/logout", logoutController);

export default authRouter;
