import clsx from "clsx";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import SecondaryButton from "../button/SecondaryButton";
import { useAuth } from "../../hooks/useAuth";

const Header = ({ user }) => {
  const { logout } = useAuth();
  return (
    <div className="sticky top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white px-5 py-2 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Search */}
        <div className="flex items-center gap-2 rounded-xl border border-gray-400 px-3">
          <FaSearch />
          <input
            placeholder="Search..."
            className="text-dark border-none p-2 outline-none placeholder:text-gray-500"
            type="text"
          />
        </div>

        {/* Right section */}
        <div className="flex items-center gap-5 text-sm">
          {/* Actions */}

          <Link to="/admin/auth">
            <SecondaryButton>Sign up</SecondaryButton>
          </Link>

          {/* User info */}
          <div className="text-right">
            <h1 className="text-dark font-medium capitalize">
              {user?.name || "User Name"}
            </h1>
            <h2 className="text-xs text-gray-500">
              {user?.email || "usernameemail@gmail.com"}
            </h2>
          </div>

          {/* Avatar dropdown */}
          <div className="group relative">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={
                user?.avatar ||
                "https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-3.jpg"
              }
              alt="avatar"
            />
            <div
              className={clsx(
                "invisible absolute right-0 z-50 w-64 shadow-lg",
                "translate-y-2 opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
              )}
            >
              <div className="mt-2 rounded-lg bg-white p-5">
                <div className="flex items-center gap-2 border-b border-gray-300 pb-3">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={
                      user?.avatar ||
                      "https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-3.jpg"
                    }
                    alt="avatar"
                  />
                  <div className="max-w-[160px] truncate">
                    <h1 className="text-dark capitalize">
                      {user?.name || "User Name"}
                    </h1>
                    <h2 className="text-xs text-gray-500">
                      {user?.email || "usernameemail@gmail.com"}
                    </h2>
                  </div>
                </div>
                <ul className="flex flex-col py-2 capitalize">
                  <li className="hover:text-primary rounded-lg px-4 py-2 transition-all hover:bg-gray-100">
                    <button>
                      <Link to={"/admin/user-profile"}>hồ sơ & tài khoản</Link>
                    </button>
                  </li>
                  <li
                    onClick={() => logout()}
                    className="hover:text-primary rounded-lg px-4 py-2 transition-all hover:bg-gray-100"
                  >
                    <button>đăng xuất</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
