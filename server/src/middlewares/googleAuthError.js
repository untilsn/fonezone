import config from "../config/env.js";
import CustomError from "../utils/customError.js";

const handleGoogleAuthError = (err, req, res) => {
  console.error("Google Auth Error:", err);

  if (err instanceof CustomError) {
    return res.redirect(`${config.CLIENT_URL}/login-fail?error=${encodeURIComponent(err.message)}`);
  }

  return res.redirect(`${config.CLIENT_URL}/login-fail?error=unexpected_error`);
};

export default handleGoogleAuthError;
