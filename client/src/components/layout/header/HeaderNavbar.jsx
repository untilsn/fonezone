import React, { useMemo } from 'react';
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import HeaderLeft from './HeaderLeft';
import { HEADER_NAVBAR } from '../../../constants/headerNavbar';
import { AiOutlineLogout, AiOutlineShopping, AiOutlineUser } from 'react-icons/ai';
import { FaAngleDown } from 'react-icons/fa';
import { useAuth } from "../../../hooks/useAuth";

const HeaderNavbar = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const { logout } = useAuth();
  const currentPath = useMemo(() => location.pathname, [location.pathname, navigate]);

  return (
    <div className='grid grid-cols-4 items-center container'>
      <HeaderLeft></HeaderLeft>
      <nav className='flex items-center px-2 border-x border-darkGray border-opacity-10 col-span-2' role="navigation" aria-label="Main navigation">
        {HEADER_NAVBAR.length > 0 ? (
          HEADER_NAVBAR.map((item) => (
            <NavLink
              to={item.type === "dropdown" ? "#" : item.url}
              key={item.id}
              className={({ isActive }) => `group relative w-full px-3 py-[14px] flex items-center justify-center ${isActive ? 'text-yellowColor' : 'text-darkPrimary'} hover:text-yellowColor transition-colors duration-200 font-medium text-[13px]`}
              aria-label={item.title}
            >
              <span className='flex items-center gap-1'>
                {item.title} {item.type === "dropdown" && <FaAngleDown className='mt-[2px]' />}
              </span>
              <span
                className={`absolute bottom-0 left-0 h-[1.2px] w-0 transition-all duration-300 group-hover:w-full ${currentPath === item.url ? 'w-full' : ''} bg-yellow bg-opacity-80`}
              ></span>
              <span
                className={`absolute bottom-0 right-0 h-[1.2px] w-0 transition-all duration-300 group-hover:w-full ${currentPath === item.url ? 'w-full' : ''} bg-yellow bg-opacity-80`}
              ></span>
              {/* Dropdown */}
              {item.hasDropdown && (
                <div className="absolute right-0 top-full mt-0 w-60 z-50 hidden group-hover:block bg-white">
                  <div className={`shadow-lg overflow-hidden text-sm transition-opacity duration-200`}>
                    <ul className="w-full transition-all">
                      <li
                        onClick={() => navigate("/profiles")}
                        className="flex items-center justify-between px-4 py-3 hover:bg-yellow hover:text-white transition-all">
                        <div className="block w-full">Hồ sơ</div>
                        <AiOutlineUser className="mr-2" />
                      </li>
                      <li
                        onClick={() => navigate("/orders")}
                        className="flex items-center justify-between px-4 py-3 hover:bg-yellow hover:text-white transition-all">
                        <div className="block w-full">Đơn hàng</div>
                        <AiOutlineShopping className="mr-2" />
                      </li>
                      <li
                        className="flex items-center justify-between border-t px-4 py-3 hover:bg-yellow hover:text-white transition-all cursor-pointer"
                        onClick={logout}
                      >
                        <h1>Đăng xuất</h1>
                        <AiOutlineLogout className="mr-2" />
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </NavLink>
          ))
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};

export default React.memo(HeaderNavbar);
