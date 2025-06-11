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

  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder}
        className={clsx(
          "block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900",
          "focus:border-primary focus:ring-primary transition-all outline-none",
          "placeholder:text-gray-400",
          type === "password" && "pr-12",
          className,
        )}
      />
      {type === "password" && (
        <button
          type="button"
          className="absolute top-1/2 right-1 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <FaEyeSlash className="h-4 w-4" />
          ) : (
            <FaEye className="h-4 w-4" />
          )}
        </button>
      )}
    </div>
  );
};

export default InputField;
