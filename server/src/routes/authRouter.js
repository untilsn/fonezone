import express from "express"
import {
  loginUserController,
  logoutController,
  refreshTokenController,
  registerUserController,
  resetPasswordController,
  sendResetOtpController,
  verifyEmailController,
} from "../controllers/authController.js"
import validateMiddleware from "../middlewares/validateMiddleware.js"
import {
  loginSchema,
  registerSchema,
  resetPasswordSchema,
  sendResetOtpSchema,
  verifyEmailSchema
} from "../validation/authSchema.js"

const authRouter = express.Router()

authRouter.post("/login", validateMiddleware(loginSchema), loginUserController)
authRouter.post("/register", validateMiddleware(registerSchema), registerUserController)
authRouter.post("/verify-account", validateMiddleware(verifyEmailSchema), verifyEmailController)
authRouter.post("/send-reset-otp", validateMiddleware(sendResetOtpSchema), sendResetOtpController)
authRouter.post("/reset-password", validateMiddleware(resetPasswordSchema), resetPasswordController)
authRouter.post("/refresh-token", refreshTokenController)
authRouter.post("/logout", logoutController)

export default authRouter