import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-5 py-2 border-b border-gray-200 shadow-sm">
      {/* search */}
      <div className="flex items-center gap-2 px-3 border border-gray-400 rounded-xl">
        <FaSearch />
        <input
          placeholder="search...."
          className="p-2 border-none outline-none text-dark placeholder:text-gray-500"
          type="text"
        />
      </div>
      {/* user */}
      <div className="flex items-center gap-5 text-sm">
        <div>
          <h1 className="capitalize text-dark">user name</h1>
          <h2 className="text-gray-500">usernameemail@gmail.com</h2>
        </div>
        <div>
          <img
            className="h-10 rounded max-w-10"
            src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-3.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
