import express from "express"
import {
  loginUserController,
  registerUserController,
  resetPasswordController,
  sendResetOtpController,
  verifyEmailController,
} from "../controllers/authController.js"

const authRouter = express.Router()

authRouter.post("/login", loginUserController)
authRouter.post("/register", registerUserController)
authRouter.post("/logout", registerUserController)
authRouter.post("/verify-account", verifyEmailController)
authRouter.post("/send-reset-otp", sendResetOtpController)
authRouter.post("/reset-password", resetPasswordController)
authRouter.post("/refresh-token", registerUserController)

export default authRouter