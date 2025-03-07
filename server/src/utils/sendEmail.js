import transporter from "../config/nodeMailer.js"
import config from "../config/env.js";

const sendEmail = async (to, subject, html) => {
  const mailOptions = {
    from: config.EMAIL_CLIENT,
    to,
    subject,
    html,
  };
  await transporter.sendMail(mailOptions);
};

export default sendEmail