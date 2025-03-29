import express from "express";
import passport from "../config/passport.js";
import {
  loginUserController, registerUserController, verifyAccountController,
  forgetPasswordController, verifyOtpResetController, resetPasswordController,
  refreshTokenController, googleAuthController, logoutController,
  getUserProfileController,
} from "../controllers/authController.js";
import validate from "../middlewares/validateMiddleware.js";
import {
  loginValidation, registerValidation, resetPasswordValidation,
  verifyAccountValidation, verifyOtpValidation, forgotPasswordValidation
} from "../validation/authValidation.js";
import { isUser } from "../middlewares/authMiddleware.js";

const authRouter = express.Router();

/*USER AUTH ROUTES*/
// Authentication dành cho khách hàng
authRouter.post("/login", validate(loginValidation), loginUserController);
authRouter.post("/register", validate(registerValidation), registerUserController);
authRouter.post("/verify-account", validate(verifyAccountValidation), verifyAccountController);
authRouter.get("/profile", isUser, getUserProfileController);
authRouter.post("/refresh-token", refreshTokenController);
authRouter.post("/logout", logoutController);

// Password recovery
authRouter.post("/password/forgot", validate(forgotPasswordValidation), forgetPasswordController);
authRouter.post("/password/verify-otp", validate(verifyOtpValidation), verifyOtpResetController);
authRouter.post("/password/reset", validate(resetPasswordValidation), resetPasswordController);

// Google Auth
authRouter.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
authRouter.get("/google/callback", googleAuthController.handleGoogleCallback);


/*ADMIN AUTH ROUTES*/
authRouter.post("/admin/login", validate(loginValidation));
authRouter.post("/admin/logout", logoutController);

export default authRouter;
