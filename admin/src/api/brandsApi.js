import { apiClient } from "./apiClient";

export const getAllBrandsApi = async () => {
  const res = await apiClient.get("/api/brands");
  console.log(res.data);
  return res.data;
};
