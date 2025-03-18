import React from "react";
import { FiPhone } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  const user = useSelector((state) => state.user);
  console.log(user)
  const isAuthenticated = user?.isAuthenticated; 
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-dark">
      <div className="flex items-center gap-2">
        <FiPhone className="text-sm text-white/80" />
        <span className="text-[13px] font-semibold text-white">
          Điện thoại: +0123 456 789
        </span>
      </div>

      {isAuthenticated ? (
        <p className="text-white/80">
          Welcome back, <span className="font-semibold text-white">{user.name}</span>
        </p>
      ) : (
        <Link to="/login" className="text-sm text-white/80">
          Đăng nhập / Đăng ký
        </Link>
      )}
    </div>
  );
};

export default HeaderTop;
