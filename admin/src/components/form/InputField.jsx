import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import clsx from "clsx";

const InputField = ({
  value,
  onChange,
  name,
  type = "text",
  placeholder,
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={inputType}
        placeholder={placeholder}
        className={clsx(
          "w-full rounded-lg border border-gray-300 p-3 text-sm",
          "focus:ring-primary outline-none placeholder:font-normal placeholder:text-gray-600 placeholder:capitalize focus:ring",
          type === "password" && "pr-10",
          className,
        )}
      />
      {type === "password" && (
        <button
          type="button"
          className="absolute right-0 text-gray-600 -translate-y-1/2 top-1/2 focus:outline-none"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      )}
    </div>
  );
};

export default InputField;
