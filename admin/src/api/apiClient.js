// apiClient.js
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { refreshTokenApi } from "./authApi";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Lấy token hiện tại
const getToken = () => localStorage.getItem("access_token");

// Giải mã token để kiểm tra thời gian hết hạn
const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const decoded = jwtDecode(token);
    return decoded.exp < Date.now() / 1000;
  } catch {
    return true;
  }
};

// Cờ để tránh gọi refresh trùng
let isRefreshing = false;

// Hàm xử lý refresh token
const handleRefreshToken = async () => {
  if (isRefreshing) return;
  isRefreshing = true;

  try {
    const res = await refreshTokenApi();
    if (res?.access_token) {
      localStorage.setItem("access_token", res.access_token);
    }
  } catch (err) {
    console.error("Refresh token failed:", err);
    localStorage.removeItem("access_token");
  } finally {
    isRefreshing = false;
  }
};

// Đồng bộ token giữa các tab
window.addEventListener("storage", (e) => {
  if (e.key === "access_token") {
    console.log("Token updated from another tab");
  }
});

// Interceptor: Gắn Authorization và refresh nếu cần
apiClient.interceptors.request.use(async (config) => {
  const token = getToken();

  if (isTokenExpired(token)) {
    console.log("Token expired. Refreshing...");
    await handleRefreshToken();
  }

  const newToken = getToken();
  if (newToken) {
    config.headers.Authorization = `Bearer ${newToken}`;
  }

  return config;
});

// Interceptor: Nếu lỗi 401 → thử refresh lại 1 lần
apiClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await handleRefreshToken();

      const newToken = getToken();
      if (newToken) {
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return apiClient(originalRequest); // gửi lại
      }
    }

    return Promise.reject(error);
  },
);
