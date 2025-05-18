import { apiClient } from "./apiClient";

export const getAllBrandsApi = async () => {
  const res = await apiClient.get("/api/brands");
  return res.data;
};

export const createBrandsApi = async (data) => {
  const res = await apiClient.post("/api/admin/brands", data);
  return res.data;
};

export const editBrandsApi = async (id, data) => {
  const res = await apiClient.patch(`/api/admin/brands/${id}`, data);
  return res.data;
};

export const toogleActiveApi = async (id) => {
  const res = await apiClient.patch(`/api/admin/brands/${id}/toogle-active`);
  return res.data;
};
