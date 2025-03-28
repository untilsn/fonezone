import { apiClient } from "../api/apiClient"


export const loginUserApi = async (data) => {
  const res = await apiClient.post("/api/auth/login", data)
  return res.data
}

export const loginWithGoogleApi = async () => {
  window.location.href = `${import.meta.env.VITE_BACKEND_URL}/api/auth/google`;
};

export const registerUserApi = async (data) => {
  console.log(data)
  const res = await apiClient.post("/api/auth/register", data)
  return res.data
}

export const verifyAccountApi = async (data) => {
  console.log(data)
  const res = await apiClient.post("/api/auth/verify-account", data)
  return res.data
}

export const getUserProfileApi = async (token) => {
  const res = await apiClient.get("/api/auth/profile", {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}

export const forgetPassword = async (data) => {
  const res = await apiClient.post("/api/auth/password/forgot", data)
  return res.data
}


export const verifyOtpReset = async (data) => {
  const res = await apiClient.post("/api/auth/password/verify-otp", data)
  return res.data
}


export const resetPassword = async (data) => {
  const res = await apiClient.post("/api/auth/password/reset", data)
  return res.data
}


export const refreshToken = async () => {
  const res = await apiClient.post("/api/auth/refresh_token")
  return res.data
}



export const logoutUser = async () => {
  const res = await apiClient.post("/api/auth/logout")
  return res.data
}



