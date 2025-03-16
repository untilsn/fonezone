import React from 'react'
import { VscSearch } from "react-icons/vsc";

const HeaderSearch = () => {
  return (
    <div className="flex items-center w-full col-span-2 bg-light rounded-3xl ">
      <span className="px-5">
        <VscSearch />
      </span>
      <input
        placeholder="Tìm kiếm sản phẩm..."
        type="search"
        className="w-full h-full p-2 py-3 bg-transparent border-none outline-none text-sm"
      ></input>
    </div>
  )
}

export default HeaderSearch