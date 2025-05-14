import clsx from "clsx";
import React from "react";
import { VscSearch } from "react-icons/vsc";

const SearchField = ({
  value,
  onChange,
  name,
  type = "search",
  placeholder,
  className = "",
}) => {
  return (
    <div className="bg-light col-span-2 flex w-full max-w-[250px] items-center border-b border-gray-300">
      <span className="px-5">
        <VscSearch />
      </span>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        className={clsx(
          "h-full w-full border-none bg-transparent p-2 py-3 text-sm font-medium outline-none placeholder:text-gray-500",
          className,
        )}
      ></input>
    </div>
  );
};

export default SearchField;
