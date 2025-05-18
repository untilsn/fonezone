import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { authService } from "../services/authService";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const axiosJWT = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const getToken = () => localStorage.getItem("access_token");
const getRefreshToken = () => localStorage.getItem("refresh_token");

const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const decoded = jwtDecode(token);
    return decoded.exp < Date.now() / 1000; // hết hạn nếu thời gian hiện tại vượt quá
  } catch {
    return true;
  }
};

const refreshAccessToken = async () => {
  try {
    // const res = await axios.post(
    //   `${BASE_URL}/api/auth/refresh-token`,
    //   {
    //     refresh_token: getRefreshToken(),
    //   },
    //   {
    //     withCredentials: true,
    //   },
    // );
    const data = await authService.refreshToken();

    const newAccessToken = data.access_token;
    if (newAccessToken) {
      localStorage.setItem("access_token", newAccessToken);
    }
    return newAccessToken;
  } catch (error) {
    console.error("Error refreshing token:", error);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    return null;
  }
};

// Interceptor
axiosJWT.interceptors.request.use(
  async (config) => {
    let token = getToken();

    if (isTokenExpired(token)) {
      token = await refreshAccessToken();
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosJWT;
