import clsx from "clsx";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <div className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-2 bg-white border-b border-gray-200 shadow-sm">
      {/* search */}
      <div className="flex items-center gap-2 px-3 border border-gray-400 rounded-xl">
        <FaSearch />
        <input
          placeholder="Search..."
          className="p-2 border-none outline-none text-dark placeholder:text-gray-500"
          type="text"
        />
      </div>

      {/* user info */}
      <div className="flex items-center gap-5 text-sm">
        <Link
          to="/admin/auth"
          className="px-4 py-2 font-semibold border border-gray-500 rounded-lg"
        >
          Sign up
        </Link>

        <div>
          <h1 className="capitalize text-dark">{user?.name || "User Name"}</h1>
          <h2 className="text-gray-500">
            {user?.email || "usernameemail@gmail.com"}
          </h2>
        </div>

        {/* avatar & dropdown */}
        <div className="relative group">
          <img
            className="object-cover w-10 h-10 rounded-full"
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
            <div className="p-5 mt-2 bg-white rounded-lg">
              <div className="flex items-center gap-2 pb-3 border-b border-gray-300">
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  src={
                    user?.avatar ||
                    "https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-3.jpg"
                  }
                  alt="avatar"
                />
                <div className="max-w-[160px] truncate">
                  <h1 className="capitalize text-dark">
                    {user?.name || "User Name"}
                  </h1>
                  <h2 className="text-gray-500">
                    {user?.email || "usernameemail@gmail.com"}
                  </h2>
                </div>
              </div>
              <ul className="flex flex-col gap-3 py-2 capitalize">
                <li className="px-4 py-2 transition-all rounded-lg hover:text-primary hover:bg-gray-100">
                  <Link to={"/admin/user-profile"}>hồ sơ & tài khoản</Link>
                </li>
                <li className="px-4 py-2 transition-all rounded-lg hover:text-primary hover:bg-gray-100">
                  <Link>đăng xuất</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
