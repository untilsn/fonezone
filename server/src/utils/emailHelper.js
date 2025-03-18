import config from "../config/env.js";
import transporter from "../config/nodeMailer.js";

const sendEmail = async (to, subject, html) => {
  try {
    const mailOptions = {
      from: config.EMAIL_CLIENT,
      to,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return { success: false, message: "Failed to send email", error };
  }
};

export default sendEmail;
