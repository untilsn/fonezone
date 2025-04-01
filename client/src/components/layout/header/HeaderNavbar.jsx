import React, { useMemo } from 'react';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import HeaderLeft from './HeaderLeft';
import { HEADER_NAVBAR } from '../../../constants/headerNavbar';
import { AiOutlineLogout, AiOutlineShopping, AiOutlineUser } from 'react-icons/ai';
import { FaAngleDown } from 'react-icons/fa';
import { useAuth } from "../../../hooks/useAuth";

const HeaderNavbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;


  const handleNavigate = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className='grid grid-cols-4 items-center container'>
      <HeaderLeft />
      <nav className='flex items-center px-2 border-x border-darkGray border-opacity-10 col-span-2' role="navigation" aria-label="Main navigation">
        {HEADER_NAVBAR.map((item) => (
          <div key={item.id} className="relative group w-full">
            <NavLink
              to={item.type === "dropdown" ? "#" : item.url}
              className={({ isActive }) => `group relative w-full px-3 py-[14px] flex items-center justify-center ${isActive ? 'text-yellowColor' : 'text-darkPrimary'} hover:text-yellowColor transition-colors duration-200 font-medium text-[13px]`}
              aria-label={item.title}
            >
              <span className='flex items-center gap-1'>
                {item.title} {item.type === "dropdown" && <FaAngleDown className='mt-[2px]' />}
              </span>
              <span
                className={`absolute bottom-0 left-0 h-[1.2px] w-0 transition-all duration-300 group-hover:w-full ${currentPath === item.url ? 'w-full' : ''} bg-yellow bg-opacity-80`}
              />
              <span
                className={`absolute bottom-0 right-0 h-[1.2px] w-0 transition-all duration-300 group-hover:w-full ${currentPath === item.url ? 'w-full' : ''} bg-yellow bg-opacity-80`}
              />
            </NavLink>

            {item.hasDropdown && (
              <div className="absolute right-0 top-full mt-0 w-60 z-50 hidden group-hover:block bg-white shadow-lg transition-opacity duration-200">
                <ul className="w-full">
                  <li
                    onClick={(e) => handleNavigate(e, "/profile/account")}
                    className="flex items-center font-medium justify-between px-4 py-3 hover:bg-yellow hover:text-white transition-all cursor-pointer"
                  >
                    <span className="text-[13px]">Hồ sơ</span>
                    <AiOutlineUser />
                  </li>
                  <li
                    onClick={(e) => handleNavigate(e, "/order")}
                    className="flex items-center font-medium justify-between px-4 py-3 hover:bg-yellow hover:text-white transition-all cursor-pointer"
                  >
                    <span className="text-[13px]">Đơn hàng</span>
                    <AiOutlineShopping />
                  </li>
                  <li
                    onClick={logout}
                    className="flex items-center font-medium justify-between border-t px-4 py-3 hover:bg-yellow hover:text-white transition-all cursor-pointer"
                  >
                    <span className="text-[13px]">Đăng xuất</span>
                    <AiOutlineLogout />
                  </li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default React.memo(HeaderNavbar);
