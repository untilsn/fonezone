import { apiClient } from "./apiClient";

export const getAllBrandsApi = () => {
  const res = apiClient.get("/api/admin/brands");
  return res.data;
};
