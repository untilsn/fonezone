import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-5 py-4">
      {/* search */}
      <div className="flex items-center gap-2 px-3 border border-gray-200 rounded-3xl">
        <FaSearch />
        <input
          className="p-4 text-black border-none outline-none"
          type="text"
        />
      </div>
      {/* user */}
      <div className="flex items-center gap-5">
        <div>
          <h1>user name</h1>
          <h2>usernameemail@gmail.com</h2>
        </div>
        <div>
          <img
            className="h-8 rounded max-w-8"
            src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-3.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
