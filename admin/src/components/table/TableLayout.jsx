import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import Pagination from "../commons/Pagination";

const TableLayout = ({ children }) => {
  return (
    <div className="shadow bg-background-card rounded-2xl">
      {/* header */}
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center  gap-3 p-2 border-b border-gray-300 max-w-[250px] w-full">
          <FaSearch />
          <input
            type="search"
            className="w-full border-none outline-none placeholder:text-gray-600 "
            placeholder="search info"
          />
        </div>
        <div>
          <button className="flex items-center gap-3 px-4 py-3 text-gray-600 capitalize transition-all border border-gray-300 rounded-lg shadow hover:text-primary-active hover:shadow-md">
            <IoFilterOutline size={22} />
            <span>filter</span>
          </button>
        </div>
      </div>
      {/* content */}
      <div>{children}</div>

      {/* bootom */}
      <div className="flex items-center justify-between p-5">
        <div>showing 14 of 20</div>
        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default TableLayout;
