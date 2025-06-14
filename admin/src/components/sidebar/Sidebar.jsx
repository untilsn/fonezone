import clsx from "clsx";
import { FaChartPie } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { sidebarMenuItems } from "../../constants/sidebar";
import Logo from "../ui/Logo";
import SidebarAccordion from "./SidebarAccodian";

const Sidebar = () => {
  return (
    <aside className="bg-dark fixed top-0 left-0 flex h-screen w-64 flex-col justify-between text-white">
      {/* Logo */}
      <div className="shrink-0 border-b border-gray-800 px-5 py-5">
        <Logo height="24px" color="#fff" subColor="#1b84ff" />
      </div>
      {/* content */}
      <nav className="scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent my-4 mr-2 ml-4 flex-1 overflow-y-scroll pr-2">
        <NavLink
          to="/admin/dashboard"
          end
          className={({ isActive }) =>
            clsx(
              "flex items-center gap-2 py-3 text-sm font-semibold transition-colors duration-200",
              isActive
                ? "text-primary-light"
                : "text-text-muted hover:text-primary-light",
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
      <div className="shrink-0 px-3 pb-3">
        <button className="w-full rounded-xl border border-gray-800 p-2 capitalize">
          logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
