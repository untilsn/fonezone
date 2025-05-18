import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
export const axiosBase = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
