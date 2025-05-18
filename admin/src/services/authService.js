import { axiosBase } from "../api/axiosBase";
import axiosJWT from "../api/axiosJWT";

const BASE_ENDPOINT = "/api/auth";
const USER_ENDPOINT = "/api/user";

export const authService = {
  /** Đăng nhập với tài khoản thường */
  login: async (data) => {
    const res = await axiosBase.post(`${BASE_ENDPOINT}/login`, data);
    return res.data;
  },

  /** Đăng nhập với Google */
  loginWithGoogle: () => {
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}${BASE_ENDPOINT}/google`;
  },

  // /** Đăng ký tài khoản */
  // register: async (data) => {
  //   const res = await axiosJWT.post(`${BASE_ENDPOINT}/register`, data);
  //   return res.data;
  // },

  // /** Xác minh tài khoản */
  // verifyAccount: async (data) => {
  //   const res = await axiosJWT.post(`${BASE_ENDPOINT}/verify-account`, data);
  //   return res.data;
  // },

  /** Lấy thông tin người dùng (dùng cho client lưu token) */
  getProfile: async (token) => {
    const res = await axiosJWT.get(USER_ENDPOINT, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  },

  /** Quên mật khẩu - gửi email */
  forgetPassword: async (data) => {
    const res = await axiosBase.post(`${BASE_ENDPOINT}/password/forgot`, data);
    return res.data;
  },

  /** Xác thực OTP để reset password */
  verifyOtpReset: async (data) => {
    const res = await axiosBase.post(
      `${BASE_ENDPOINT}/password/verify-otp`,
      data,
    );
    return res.data;
  },

  /** Đặt lại mật khẩu */
  resetPassword: async (data) => {
    const res = await axiosJWT.post(`${BASE_ENDPOINT}/password/reset`, data);
    return res.data;
  },

  /** Làm mới token */
  refreshToken: async () => {
    const res = await axiosBase.post(`${BASE_ENDPOINT}/refresh-token`);
    console.log(res.data);
    return res.data;
  },

  /** Đăng xuất */
  logout: async () => {
    const res = await axiosBase.post(`${BASE_ENDPOINT}/logout`);
    return res.data;
  },
};
