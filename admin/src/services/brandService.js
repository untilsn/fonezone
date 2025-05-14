import { apiClient } from "../api/apiClient";

const BASE_ENDPOINT = "api/brands";
const ADMIN_ENDPOINT = "api/admin/brands";

export const brandService = {
  /** USER: Lấy danh sách thương hiệu cho người dùng */
  getAll: async (params) => {
    const res = await apiClient.get(BASE_ENDPOINT, { params });
    return res.data;
  },

  /** ADMIN: Tạo thương hiệu */
  create: async (data) => {
    const res = await apiClient.post(ADMIN_ENDPOINT, data);
    return res.data;
  },

  /** ADMIN: Cập nhật thương hiệu */
  update: async (id, data) => {
    const res = await apiClient.patch(`${ADMIN_ENDPOINT}/${id}`, data);
    return res.data;
  },

  /** ADMIN: Bật/tắt trạng thái */
  toggleActive: async (id) => {
    const res = await apiClient.patch(`${ADMIN_ENDPOINT}/${id}/toogle-active`);
    return res.data;
  },

  /** ADMIN: Xóa thương hiệu */
  delete: async (id) => {
    const res = await apiClient.delete(`${ADMIN_ENDPOINT}/${id}`);
    return res.data;
  },
};
