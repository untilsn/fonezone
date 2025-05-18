import { axiosBase } from "../api/axiosBase";
import axiosJWT from "../api/axiosJWT";

const BASE_ENDPOINT = "api/brands";
const ADMIN_ENDPOINT = "api/admin/brands";

export const brandService = {
  /** USER: Lấy danh sách thương hiệu cho người dùng */
  getAll: async (params) => {
    const res = await axiosBase.get(BASE_ENDPOINT, { params });
    return res.data;
  },

  /** ADMIN: Tạo thương hiệu */
  create: async (data) => {
    const res = await axiosJWT.post(ADMIN_ENDPOINT, data);
    return res.data;
  },

  /** ADMIN: Cập nhật thương hiệu */
  update: async (id, data) => {
    const res = await axiosJWT.patch(`${ADMIN_ENDPOINT}/${id}`, data);
    return res.data;
  },

  /** ADMIN: Bật/tắt trạng thái */
  toggleActive: async (id) => {
    const res = await axiosJWT.patch(`${ADMIN_ENDPOINT}/${id}/toggle-active`);
    return res.data;
  },

  /** ADMIN: Xóa thương hiệu */
  delete: async (id) => {
    const res = await axiosJWT.delete(`${ADMIN_ENDPOINT}/${id}`);
    return res.data;
  },
};
