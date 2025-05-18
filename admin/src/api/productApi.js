import { apiClient } from "../api/apiClient";

export const getAllProduct = async (params) => {
  const res = await apiClient.get("/api/products", { params });
  return res.data;
};
