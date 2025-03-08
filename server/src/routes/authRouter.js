import express from "express"
import {
  loginUserController,
  logoutController,
  registerUserController,
  resetPasswordController,
  sendResetOtpController,
  verifyEmailController,
} from "../controllers/authController.js"
import validateMiddleware from "../middlewares/validateMiddleware.js"
import {
  loginSchema,
  registerSchema,
  verifyEmailSchema
} from "../validation/authSchema.js"

const authRouter = express.Router()

authRouter.post("/login", validateMiddleware(loginSchema), loginUserController)
authRouter.post("/register", validateMiddleware(registerSchema), registerUserController)
authRouter.post("/logout", logoutController)
authRouter.post("/verify-account", validateMiddleware(verifyEmailSchema), verifyEmailController)
authRouter.post("/send-reset-otp", sendResetOtpController)
authRouter.post("/reset-password", resetPasswordController)
authRouter.post("/refresh-token", registerUserController)

export default authRouter