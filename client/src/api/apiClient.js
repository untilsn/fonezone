import axios from "axios";
import jwtDecode from "jwt-decode";
import { refreshToken } from "./authApi";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Kiểm tra chuỗi JSON hợp lệ
const isJsonString = (data) => {
  try {
    JSON.parse(data);
    return true;
  } catch (error) {
    return false;
  }
};

// Lấy token từ localStorage
let access_token = localStorage.getItem("access_token");
let decodedToken = {};

if (access_token && isJsonString(access_token)) {
  access_token = JSON.parse(access_token);
  try {
    decodedToken = jwtDecode(access_token);
  } catch (error) {
    console.error("Lỗi decode token:", error);
    access_token = null;
    decodedToken = {};
  }
}

// Hàm cập nhật token
const updateToken = async () => {
  try {
    const res = await refreshToken();
    console.log("Token refreshed:", res);
    if (res?.access_token) {
      localStorage.setItem("access_token", JSON.stringify(res.access_token));
      access_token = res.access_token;
      decodedToken = jwtDecode(res.access_token);
    }
  } catch (error) {
    console.error("Refresh token failed:", error);
    localStorage.removeItem("access_token");
    access_token = null;
    decodedToken = {};
  }
};

// Thêm interceptor để tự động refresh token
apiClient.interceptors.request.use(
  async (config) => {
    const currentTime = Date.now() / 1000;

    if (decodedToken?.exp && decodedToken.exp < currentTime) {
      console.log("Token expired, refreshing...");
      await updateToken();
    }

    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
