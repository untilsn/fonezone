import CustomError from "../utils/customError";

const handleGoogleAuthError = (err, req, res) => {
  console.error("Google Auth Error:", err);

  if (err instanceof CustomError) {
    // Gắn lỗi lên URL để trang login hiển thị
    return res.redirect(`/login?error=${encodeURIComponent(err.message)}`);
  }

  // Nếu lỗi không xác định, redirect với lỗi chung
  return res.redirect("/login?error=unexpected_error");
};

export default handleGoogleAuthError;
