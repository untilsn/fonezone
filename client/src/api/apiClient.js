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

// Lấy token từ localStorage
let access_token = localStorage.getItem("access_token");
let decodedToken = {};
let isRefreshing = false; // 🚀 Tránh gọi refresh token nhiều lần

// Kiểm tra và decode token
const loadToken = () => {
  access_token = localStorage.getItem("access_token");
  if (access_token) {
    try {
      decodedToken = jwtDecode(access_token);
    } catch (error) {
      console.error("Lỗi decode token:", error);
      access_token = null;
      decodedToken = {};
    }
  }
};
loadToken(); // Gọi khi khởi chạy

// Hàm cập nhật token
const updateToken = async () => {
  if (isRefreshing) return; // Nếu đang refresh, không gọi lại
  isRefreshing = true;

  try {
    const res = await refreshTokenApi();
    if (res?.access_token) {
      localStorage.setItem("access_token", res.access_token);
      access_token = res.access_token;
      decodedToken = jwtDecode(res.access_token);
    }
  } catch (error) {
    console.error("Refresh token failed:", error);
    localStorage.removeItem("access_token");
    access_token = null;
    decodedToken = {};
  } finally {
    isRefreshing = false;
  }
};

// 🚀 Lắng nghe sự kiện `storage` để cập nhật token giữa các tab
window.addEventListener("storage", (event) => {
  if (event.key === "access_token") {
    loadToken();
  }
});

// 🚀 Request interceptor: Kiểm tra token hết hạn trước khi gửi request
apiClient.interceptors.request.use(
  (config) => {
    const currentTime = Date.now() / 1000;

    if (decodedToken?.exp && decodedToken.exp < currentTime) {
      console.log("Token expired, waiting for refresh...");
      if (!isRefreshing) updateToken();
    }

    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// 🚀 Response interceptor: Nếu nhận 401, tự động refresh token
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Nếu lỗi 401 và chưa thử refresh, thì thử refresh token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await updateToken();

        if (access_token) {
          originalRequest.headers.Authorization = `Bearer ${access_token}`;
          return apiClient(originalRequest); // 🚀 Gửi lại request
        }
      } catch (refreshError) {
        console.error("Không thể refresh token, cần đăng xuất!", refreshError);
      }
    }

    return Promise.reject(error);
  }
);
