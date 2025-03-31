import User from "../models/User.js";





export const getUserProfile = async (userId) => {
  const user = await User.findById(userId).select("-password")
  if (!user) {
    throw new CustomError(404, "Tài khoản người dùng không tồn tại!");
  }
  return user
}
