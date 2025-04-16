import React from "react";
import { sidebarMenuItems } from "../../constants/sidebar";
import Logo from "../ui/Logo";
import SidebarAccordion from "./SidebarAccodian";
import { Link, NavLink } from "react-router-dom";
import { FaChartPie } from "react-icons/fa";
import clsx from "clsx";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 flex flex-col justify-between w-64 h-screen text-white bg-dark">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-gray-800 shrink-0">
        <Logo height="24px" color="#fff" subColor="#1b84ff" />
      </div>
      {/* content */}
      <nav className="flex-1 pr-2 my-4 ml-4 mr-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
        <NavLink
          to="/admin/dashboard"
          end
          className={({ isActive }) =>
            clsx(
              "flex items-center gap-2 py-3 text-sm font-semibold transition-colors duration-200",
              isActive
                ? "text-primary-light"
                : "text-text-muted hover:text-primary-light"
            )
          }
        >
          <FaChartPie />
          <span>Dashboard</span>
        </NavLink>
        {sidebarMenuItems.map((item) => (
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
      <div className="px-3 pb-3 shrink-0">
        <button className="w-full p-2 capitalize border border-gray-800 rounded-xl">
          logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
