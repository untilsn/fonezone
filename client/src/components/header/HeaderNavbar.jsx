import React, { useMemo } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { HEADER_NAVBAR } from '../../constants/headerNavbar';
import HeaderLeft from './HeaderLeft';

const HeaderNavbar = () => {
  const location = useLocation();

  // Memoize pathname để tránh re-render không cần thiết
  const currentPath = useMemo(() => location.pathname, [location.pathname]);

  return (
    <div className='grid grid-cols-4 items-center'>
      <HeaderLeft></HeaderLeft>
      <nav className='flex items-center px-2 border-x border-darkGray border-opacity-10 col-span-2' role="navigation" aria-label="Main navigation">
        {HEADER_NAVBAR.length > 0 ? (
          HEADER_NAVBAR.map((item) => (
            <NavLink
              to={item.url}
              key={item.id}
              className={({ isActive }) => `group relative w-full px-3 py-[14px] flex items-center justify-center ${isActive ? 'text-yellowColor' : 'text-darkPrimary'} hover:text-yellowColor transition-colors duration-200 font-medium text-[13px]`}
              aria-label={item.title}
            >
              <span>
                {item.title}
              </span>
              <span
                className={`absolute bottom-0 left-0 h-[1.2px] w-0 transition-all duration-300 group-hover:w-full ${currentPath === item.url ? 'w-full' : ''} bg-yellow bg-opacity-80`}
              ></span>
              <span
                className={`absolute bottom-0 right-0 h-[1.2px] w-0 transition-all duration-300 group-hover:w-full ${currentPath === item.url ? 'w-full' : ''} bg-yellow bg-opacity-80`}
              ></span>
            </NavLink>
          ))
        ) : (
          <div className="px-3 py-[14px] text-darkPrimary">Loading navigation...</div>
        )}
      </nav>
    </div>

  );
};

// Sử dụng React.memo để ngăn re-render không cần thiết
export default React.memo(HeaderNavbar);