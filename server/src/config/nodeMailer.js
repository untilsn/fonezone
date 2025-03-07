import nodemailer from "nodemailer"
import config from "./env.js"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: config.EMAIL_CLIENT,
    pass: config.EMAIL_APP_PASSWORD,
  }
})  

export default transporter