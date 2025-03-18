import { apiClient } from "./apiClient"



export const loginUser = async (data) => {
  const res = await apiClient.post("/api/auth/login", data)
  return res.data
}

export const registerUser = async (data) => {
  console.log(data)
  const res = await apiClient.post("/api/auth/register", data)
  return res.data
}

export const verifyAccount = async (data) => {
  console.log(data)
  const res = await apiClient.post("/api/auth/verify-account", data)
  return res.data
}

export const getUserProfile = async (token) => {
  const res = await apiClient.get("/api/auth/profile", {
    headers: {Authorization: `Bearer ${token}`}
  })
  return res.data
}

export const resetPassword = async (data) => {
  const res = await apiClient.post("/api/auth/login", data)
  return res.data
}

export const profileUser = async (data) => {
  const res = await apiClient.get("/api/auth/login", data)
  return res.data
}

export const refreshToken = async (data) => {
  const res = await apiClient.post("/api/auth/login", data)
  return res.data
}

export const logoutUser = async (data) => {
  const res = await apiClient.post("/api/auth/login", data)
  return res.data
}



