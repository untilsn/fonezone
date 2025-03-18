import { axiosJwt } from "../hooks/useAuth";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const apiClient = axiosJwt.create({
  baseURL: BASE_URL,
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
  },
});
