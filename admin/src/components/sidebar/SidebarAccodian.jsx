import clsx from "clsx";
import React, { useState } from "react";
import Collapse from "react-collapse";
import { FaChevronDown } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const SidebarAccodian = ({ icon: IconComponent, title, items, basePath }) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const isActiveChild = () => {
    return items.some((item) => location.pathname === basePath + item.to);
  };
  console.log(isActiveChild());
  return (
    <div>
      {/* HEADER */}
      <div
        className={clsx(
          "flex items-center justify-between py-3 cursor-pointer text-sm transition-all",
          isOpen || isActiveChild()
            ? "text-primary-light"
            : "text-text-muted hover:text-primary-light"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <IconComponent size={14} />
          <h1 className="ml-2 font-semibold">{title}</h1>
        </div>
        <FaChevronDown
          className={clsx("text-xs transition-transform duration-300", {
            "rotate-180": isOpen,
          })}
        />
      </div>
      {/* CONTENT */}
      <Collapse
        isOpened={isOpen}
        theme={{
          collapse: "transition-all duration-300 ease-in-out",
          content: "origin-top",
        }}
      >
        <div className="flex flex-col gap-2 pt-1 pb-2">
          {items.map((item) => (
            <NavLink
              key={item.key}
              to={`${basePath}${item.to}`}
              end
              className={({ isActive }) =>
                clsx(
                  "flex items-center pl-4 py-3 text-[13px] rounded-lg transition-colors duration-200",
                  isActive
                    ? "text-primary-light bg-gray-primary"
                    : "text-text-muted hover:text-primary-light hover:bg-gray-primary"
                )
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
