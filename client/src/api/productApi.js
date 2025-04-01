import { apiClient } from "../api/apiClient";

export const getAllProduct = async (params) => {
  console.log(params)
  const res = await apiClient.get("/api/products", { params });
  console.log(res.data)
  return res.data;
};