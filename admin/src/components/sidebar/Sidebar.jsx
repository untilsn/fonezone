import React from "react";
import { FaRegUser } from "react-icons/fa";
import Logo from "../ui/Logo";
import SidebarAccordion from "./SidebarAccodian";

const menuItems = [
  {
    icon: <FaRegUser size={18} />,
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
];

const Sidebar = () => {
  return (
    <aside className="flex flex-col justify-between w-64 h-screen text-white bg-dark">
      {/* Logo */}
      <div className="py-5 border-b border-gray-800">
        <Logo height="24px" color="#fff" subColor="#fcb941" />
      </div>
      {/* content */}
      <nav className="flex-1 mx-3 my-4 overflow-y-auto">
        {menuItems.map((item) => (
          <SidebarAccordion
            key={item.title}
            title={item.title}
            icon={item.icon}
            items={item.items}
            basePath={item.basePath}
          />
        ))}
      </nav>
      {/* logout */}
      <div className="">
        <button className="w-full p-4 border border-gray-800 rounded-3xl">
          logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
