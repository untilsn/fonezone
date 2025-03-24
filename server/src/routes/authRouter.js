import express from "express";
import passport from "../config/passport.js";
import config from "../config/env.js";
import {
  loginUserController, registerUserController, verifyAccountController,
  forgetPasswordController, verifyOtpResetController, resetPasswordController,
  refreshTokenController, googleAuthController, logoutController
} from "../controllers/authController.js";
import validateMiddleware from "../middlewares/validateMiddleware.js";
import {
  loginValidation, registerValidation, resetPasswordValidation,
  verifyAccountValidation, verifyOtpValidation, forgotPasswordValidation
} from "../validation/authValidation.js";

const authRouter = express.Router();

/* AUTH ROUTES */
authRouter.post("/login", validateMiddleware(loginValidation), loginUserController);
authRouter.post("/register", validateMiddleware(registerValidation), registerUserController);
authRouter.post("/verify-account", validateMiddleware(verifyAccountValidation), verifyAccountController);
authRouter.post("/refresh-token", refreshTokenController);
authRouter.post("/logout", logoutController);

/* PASSWORD RECOVERY */
authRouter.post("/password/forgot", validateMiddleware(forgotPasswordValidation), forgetPasswordController);
authRouter.post("/password/verify-otp", validateMiddleware(verifyOtpValidation), verifyOtpResetController);
authRouter.post("/password/reset", validateMiddleware(resetPasswordValidation), resetPasswordController);

/* GOOGLE AUTH */
authRouter.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
authRouter.get("/google/callback", passport.authenticate("google",
  {
    failureRedirect: "/api/google/login/fail",
    session: false
  },
  (req, res, next) => {
    googleAuthController(req, res, next)
  }
))
authRouter.get("/google/fail", (req, res) => {
  res.redirect(`${config.CLIENT_URL}/login-fail`);
});

export default authRouter;

