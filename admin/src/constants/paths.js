// src/constants/paths.js
export const paths = {
  admin: "/admin",
  dashboard: "/admin/dashboard",
  users: {
    list: "/admin/users",
    create: "/admin/users/create",
    edit: (id) => `/admin/users/${id}/edit`,
  },
  products: {
    list: "/admin/products",
    create: "/admin/products/create",
    edit: (slug) => `/admin/products/${slug}/edit`,
  },
  brands: {
    list: "/admin/brands",
    create: "/admin/brands/create",
  },
};
