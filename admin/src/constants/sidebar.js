import {
  FaBolt,
  FaBox,
  FaComments,
  FaRegNewspaper,
  FaShoppingCart,
  FaTag,
  FaThLarge,
  FaTicketAlt,
  FaUser,
  FaChartPie,
} from "react-icons/fa";

export const sidebarMenuItems = [
  {
    icon: FaUser,
    title: "Quản lý người dùng",
    basePath: "/admin",
    items: [
      { key: "user-list", title: "Danh sách người dùng", to: "/users" },
      { key: "user-create", title: "Thêm người dùng mới", to: "/users/create" },
      {
        key: "user-edit",
        title: "Chỉnh sửa người dùng",
        to: "/users/:id/edit",
      },
    ],
  },
  {
    icon: FaBox,
    title: "Quản lý sản phẩm",
    basePath: "/admin",
    items: [
      { key: "productList", title: "Danh sách sản phẩm", to: "/products" },
      {
        key: "productCreate",
        title: "Thêm sản phẩm mới",
        to: "/products/create",
      },
      {
        key: "productEdit",
        title: "Chỉnh sửa sản phẩm",
        to: "/products/:slug/edit",
      },
    ],
  },
  {
    icon: FaTag,
    title: "Quản lý thương hiệu",
    basePath: "/admin",
    items: [
      { key: "brandList", title: "Danh sách thương hiệu", to: "/brands" },
      {
        key: "brandCreate",
        title: "Thêm thương hiệu mới",
        to: "/brands/create",
      },
      {
        key: "brandEdit",
        title: "Chỉnh sửa thương hiệu",
        to: "/brands/:id/edit",
      },
    ],
  },
  {
    icon: FaThLarge,
    title: "Quản lý danh mục",
    basePath: "/admin",
    items: [
      { key: "categoryList", title: "Danh sách danh mục", to: "/categories" },
      {
        key: "categoryCreate",
        title: "Thêm danh mục mới",
        to: "/categories/create",
      },
      {
        key: "categoryEdit",
        title: "Chỉnh sửa danh mục",
        to: "/categories/:id/edit",
      },
    ],
  },
  {
    icon: FaShoppingCart,
    title: "Quản lý đơn hàng",
    basePath: "/admin",
    items: [
      { key: "orderList", title: "Danh sách đơn hàng", to: "/orders" },
      {
        key: "orderDetail",
        title: "Chi tiết đơn hàng",
        to: "/orders/:id",
      },
    ],
  },
  {
    icon: FaComments,
    title: "Quản lý đánh giá",
    basePath: "/admin",
    items: [{ key: "reviewList", title: "Danh sách đánh giá", to: "/reviews" }],
  },
  {
    icon: FaRegNewspaper,
    title: "Quản lý blog",
    basePath: "/admin",
    items: [
      { key: "blogList", title: "Danh sách bài viết", to: "/blogs" },
      {
        key: "blogCreate",
        title: "Thêm bài viết mới",
        to: "/blogs/create",
      },
      {
        key: "blogEdit",
        title: "Chỉnh sửa bài viết",
        to: "/blogs/:id/edit",
      },
    ],
  },
  {
    icon: FaTicketAlt,
    title: "Quản lý mã giảm giá",
    basePath: "/admin",
    items: [
      { key: "couponList", title: "Danh sách mã giảm giá", to: "/coupons" },
      {
        key: "couponCreate",
        title: "Thêm mã giảm giá mới",
        to: "/coupons/create",
      },
      {
        key: "couponEdit",
        title: "Chỉnh sửa mã giảm giá",
        to: "/coupons/:id/edit",
      },
    ],
  },
  {
    icon: FaBolt,
    title: "Quản lý flash sale",
    basePath: "/admin",
    items: [
      {
        key: "flashsaleList",
        title: "Danh sách flash sale",
        to: "/flashsales",
      },
      {
        key: "flashsaleCreate",
        title: "Tạo flash sale mới",
        to: "/flashsales/create",
      },
      {
        key: "flashsaleEdit",
        title: "Chỉnh sửa flash sale",
        to: "/flashsales/:id/edit",
      },
    ],
  },
];
