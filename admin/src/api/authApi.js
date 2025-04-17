import { apiClient } from "../api/apiClient";

export const loginUserApi = async (data) => {
  const res = await apiClient.post("/api/auth/login", data);
  return res.data;
};

export const loginWithGoogleApi = async () => {
  window.location.href = `${import.meta.env.VITE_BACKEND_URL}/api/auth/google`;
};

export const registerUserApi = async (data) => {
  console.log(data);
  const res = await apiClient.post("/api/auth/register", data);
  return res.data;
};

export const verifyAccountApi = async (data) => {
  console.log(data);
  const res = await apiClient.post("/api/auth/verify-account", data);
  return res.data;
};

export const getUserProfileApi = async (token) => {
  const res = await apiClient.get("/api/user", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const forgetPasswordApi = async (data) => {
  const res = await apiClient.post("/api/auth/password/forgot", data);
  return res.data;
};

export const verifyOtpResetApi = async (data) => {
  const res = await apiClient.post("/api/auth/password/verify-otp", data);
  return res.data;
};

export const resetPasswordApi = async (data) => {
  const res = await apiClient.post("/api/auth/password/reset", data);
  return res.data;
};

export const refreshTokenApi = async () => {
  const res = await apiClient.post("/api/auth/refresh_token");
  return res.data;
};

export const logoutUserApi = async () => {
  const res = await apiClient.post("/api/auth/logout");
  return res.data;
};
