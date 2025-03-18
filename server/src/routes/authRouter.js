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
  verifyAccountController,
  verifyOtpResetController
} from "../controllers/authController.js";
// Middlewares
import validateMiddleware from "../middlewares/validateMiddleware.js";
import { verifyUserToken } from "../middlewares/authMiddleware.js";
import {
  loginValidation,
  registerValidation, resetPasswordValidation,
  verifyAccountValidation,
  verifyOtpValidation,
  forgotPasswordValidation
} from "../validation/authValidation.js";
// Validation Schemas

const authRouter = express.Router();

// Auth Routes
authRouter.post("/login", validateMiddleware(loginValidation), loginUserController);
authRouter.post("/register", validateMiddleware(registerValidation), registerUserController);
authRouter.post("/verify-account", validateMiddleware(verifyAccountValidation), verifyAccountController);
authRouter.post("/password/forgot", validateMiddleware(forgotPasswordValidation), forgetPasswordController);
authRouter.post("/password/verify-otp", validateMiddleware(verifyOtpValidation), verifyOtpResetController);
authRouter.post("/password/reset", validateMiddleware(resetPasswordValidation), resetPasswordController);
authRouter.get("/profile", verifyUserToken, getUserProfileController);
authRouter.post("/refresh-token", refreshTokenController);
authRouter.post("/logout", logoutController);

export default authRouter;
