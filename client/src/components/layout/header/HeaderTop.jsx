import React from "react";
import { FiPhone } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { FaAngleDown } from "react-icons/fa";

const HeaderTop = () => {
  const user = useSelector((state) => state.user);
  const isAuthenticated = user?.isAccountVerify;

  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-dark relative">
      {/* Thông tin liên hệ */}
      <div className="flex items-center gap-2">
        <FiPhone className="text-sm text-white/80" />
        <span className="text-[13px] font-semibold text-white">
          Điện thoại: +0123 456 789
        </span>
      </div>

      {/* Kiểm tra nếu đã đăng nhập */}
      {isAuthenticated ? (
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <p className="text-white/80 cursor-pointer text-sm flex items-center gap-1">
            Welcome back,
            <span className="font-semibold text-white">
              {user.name}
            </span>
          </p>
        </div>
      ) : (
        <Link to="/login" className="text-sm text-white/80">
          Đăng nhập / Đăng ký
        </Link>
      )}
    </div>
  );
};

export default HeaderTop;
