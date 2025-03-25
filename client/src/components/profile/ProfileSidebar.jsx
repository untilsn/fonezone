import React from 'react';
import { NavLink } from "react-router-dom";
import { FiLock, FiLogOut, FiMessageCircle, FiShoppingCart, FiStar, FiUser } from "react-icons/fi";

const ProfileSidebar = () => {
  const sidebars = [
    { key: "account", name: "tài khoản", path: "/profile/account", icon: <FiUser /> },
    { key: "message", name: "tin nhắn", path: "/profile/message", icon: <FiMessageCircle /> },
    { key: "review", name: "đánh giá", path: "/profile/review", icon: <FiStar /> },
    { key: "changepassword", name: "đổi mật khẩu", path: "/profile/change-password", icon: <FiLock /> },
    { key: "order", name: "đơn hàng", path: "/profile/order", icon: <FiShoppingCart /> },
  ];

  return (
    <div className="w-64 h-screen bg-white shadow-md flex flex-col">
      {/* Tiêu đề */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Profile</h2>
      </div>

      {/* Danh sách điều hướng */}
      <nav className="flex-1 mt-4">
        {sidebars.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center capitalize p-4 text-gray-600 ${isActive ? "bg-gray-dark text-white" : "hover:bg-gray-100"}`
            }
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Gạch ngang và Đăng xuất */}
      <div className="mt-auto">
        <hr className="border-gray-300 my-2" />
        <NavLink
          to="/"
          className="flex items-center capitalize p-4 text-dark hover:bg-gray-100"
        >
          <FiLogOut className="mr-3" />
          <span>đăng xuất</span>
        </NavLink>
      </div>
    </div>
  );
};

export default ProfileSidebar;
