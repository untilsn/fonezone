import express from "express";
import passport from "../config/passport.js";
import config from "../config/env.js";
import {
  loginUserController, registerUserController, verifyAccountController,
  forgetPasswordController, verifyOtpResetController, resetPasswordController,
  refreshTokenController, googleAuthController, logoutController,
  getUserProfileController
} from "../controllers/authController.js";
import validateMiddleware from "../middlewares/validateMiddleware.js";
import {
  loginValidation, registerValidation, resetPasswordValidation,
  verifyAccountValidation, verifyOtpValidation, forgotPasswordValidation
} from "../validation/authValidation.js";
import { verifyUserToken } from "../middlewares/authMiddleware.js";

const authRouter = express.Router();

/* AUTH ROUTES */
authRouter.post("/login", validateMiddleware(loginValidation), loginUserController);
authRouter.post("/register", validateMiddleware(registerValidation), registerUserController);
authRouter.post("/verify-account", validateMiddleware(verifyAccountValidation), verifyAccountController);
authRouter.get("/profile", verifyUserToken, getUserProfileController);
authRouter.post("/refresh-token", refreshTokenController);
authRouter.post("/logout", logoutController);

/* PASSWORD RECOVERY */
authRouter.post("/password/forgot", validateMiddleware(forgotPasswordValidation), forgetPasswordController);
authRouter.post("/password/verify-otp", validateMiddleware(verifyOtpValidation), verifyOtpResetController);
authRouter.post("/password/reset", validateMiddleware(resetPasswordValidation), resetPasswordController);

/* GOOGLE AUTH */
authRouter.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: `${config.CLIENT_URL}/login-fail`
  }),
  googleAuthController
);
authRouter.get("/google/fail", (req, res) => {
  res.redirect(`${config.CLIENT_URL}/login-fail`);
});

export default authRouter;

