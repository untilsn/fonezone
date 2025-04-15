import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Collapse from "react-collapse";
import clsx from "clsx";

const SidebarAccodian = ({ icon, title, items, basePath }) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const isActiveChild = () => {
    return items.some((item) => location.pathname.includes(basePath + item.to));
  };

  return (
    <div>
      {/* HEADER */}
      <div
        className={`
        flex items-center justify-between py-3 cursor-pointer text-sm 
        ${
          isOpen || isActiveChild()
            ? "text-white"
            : "text-text-muted hover:text-white"
        }
      `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          {icon}
          <span className="ml-2 text-sm font-semibold">{title}</span>
        </div>
        <FaChevronDown
          className={clsx("transition-transform duration-300", {
            "rotate-180": isOpen,
          })}
        />
      </div>
      {/* CONTENT */}
      <Collapse isOpened={isOpen}>
        <div className="pt-1 pb-2">
          {items.map((item) => (
            <NavLink
              key={item.key}
              to={`${basePath}${item.to}`}
              className={({ isActive }) =>
                `flex items-center pl-8 py-2 text-sm transition-colors duration-200
          ${
            isActive
              ? "text-primary font-semibold"
              : "text-gray-400 hover:text-gray-300"
          }`
              }
            >
              <span className="w-1 h-1 mr-3 bg-current rounded-full"></span>
              <span>{item.title}</span>
            </NavLink>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default SidebarAccodian;
