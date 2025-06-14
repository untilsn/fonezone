import express from "express";
import passport from "../config/passport.js";
import {
  loginUserController,
  registerUserController,
  verifyAccountController,
  forgetPasswordController,
  verifyOtpResetController,
  resetPasswordController,
  refreshTokenController,
  googleAuthController,
  logoutController,
} from "../controllers/authController.js";
import { validate } from "../middlewares/validateMiddleware.js";
import {
  loginValidation,
  registerValidation,
  resetPasswordValidation,
  verifyAccountValidation,
  verifyOtpValidation,
  forgotPasswordValidation,
} from "../validation/authValidation.js";
import config from "../config/env.js";

const authRouter = express.Router();

/*USER AUTH ROUTES*/
authRouter
  .post("/login", validate(loginValidation), loginUserController)
  .post("/register", validate(registerValidation), registerUserController)
  .post(
    "/verify-account",
    validate(verifyAccountValidation),
    verifyAccountController
  )
  .post("/refresh-token", refreshTokenController)
  .post("/logout", logoutController)

  // Password recovery
  .post(
    "/password/forgot",
    validate(forgotPasswordValidation),
    forgetPasswordController
  )
  .post(
    "/password/verify-otp",
    validate(verifyOtpValidation),
    verifyOtpResetController
  )
  .post(
    "/password/reset",
    validate(resetPasswordValidation),
    resetPasswordController
  )

  // Google Auth
  .get("/google/:clientType", (req, res, next) => {
    const clientType = req.params.clientType;
    if (!["user", "admin"].includes(clientType)) {
      return res
        .status(404)
        .json({ success: false, message: "url không hợp lệ" });
    }

    passport.authenticate("google", {
      scope: ["profile", "email"],
      state: clientType, // Truyền clientType qua state
    })(req, res, next);
  })

  .get(
    "/google/callback/:clientType",
    googleAuthController.handleGoogleCallback
  )

  // .get(
  //   "/google",
  //   passport.authenticate("google", { scope: ["profile", "email"] })
  // )
  // .get("/google/callback", googleAuthController.handleGoogleCallback)

  /*ADMIN AUTH ROUTES*/
  .post("/admin/login", validate(loginValidation));

export default authRouter;
