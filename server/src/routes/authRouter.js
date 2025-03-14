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
// Validation Schemas
import {
  loginSchema,
  registerSchema,
  resetPasswordSchema,
  sendResetOtpSchema,
  verifyEmailSchema
} from "../validation/authSchema.js";

const authRouter = express.Router();

// Auth Routes
authRouter.post("/login", validateMiddleware(loginSchema), loginUserController);
authRouter.post("/register", validateMiddleware(registerSchema), registerUserController);
authRouter.post("/verify-account", validateMiddleware(verifyEmailSchema), verifyEmailController);
authRouter.post("/forget-password", validateMiddleware(sendResetOtpSchema), forgetPasswordController);
authRouter.post("/reset-password", validateMiddleware(resetPasswordSchema), resetPasswordController);
authRouter.get("/profile", verifyUserToken, getUserProfileController);
authRouter.post("/refresh-token", refreshTokenController);
authRouter.post("/logout", logoutController);

export default authRouter;
