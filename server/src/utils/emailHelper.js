import config from "../config/env.js";
import transporter from "../config/nodeMailer.js";
import CustomError from "../utils/customError.js";  

const sendEmail = async (to, subject, html) => {
  try {
    const mailOptions = {
      from: config.EMAIL_CLIENT,
      to,
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw new CustomError(500, "Failed to send email: " + error.message);
  }
};

export default sendEmail;
