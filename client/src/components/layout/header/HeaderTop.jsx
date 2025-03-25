import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../../api/authApi";
import { logout } from "../../../redux/slice/userSlice";

const HeaderTop = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isAuthenticated = user?.isAccountVerify;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    logoutUser()
    dispatch(logout())
  };

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
        <div className="relative">
          <p
            className="text-white/80 cursor-pointer text-sm"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Welcome back, <span className="font-semibold text-white">{user.name}</span>
          </p>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-1 w-40 bg-gray z-60 shadow-lg rounded-md">
              <ul className="w-full">
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link to="/profile" className="block w-full">Hồ sơ</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link to="/orders" className="block w-full">Đơn hàng</Link>
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={handleLogout}
                >
                  Đăng xuất
                </li>
              </ul>
            </div>
          )}
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
