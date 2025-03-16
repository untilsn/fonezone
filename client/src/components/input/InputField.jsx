import React, { useState } from "react";
import { useController } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = ({ name, control, label, type = "text", placeholder, icon, ...props }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, defaultValue: "" });
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

  
  return (
    <div className="w-full text-indigo-300">
      {/* Label */}
      {label && <label htmlFor={name} className="block text-gray mb-1 ml-1 capitalize text-[13px] ">{label}</label>}

      {/* Input + Icon */}
      <div className="relative border w-full px-5 py-2.5   flex items-center gap-3">
        {icon && <i className="text-lg">{icon}</i>}
        <input
          {...field}
          id={name}
          type={inputType}
          placeholder={placeholder}
          className={`w-full outline-none text-sm ${type === "password" ? "pr-6" : ""}`}
          {...props}
        />
        {/* Toggle password */}
        {type === "password" && (
          <button
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaEye className="text-gray-500" /> : <FaEyeSlash className="text-gray-500" />}
          </button>
        )}
      </div>

      {/* Hiển thị lỗi */}
      {error && <span className="text-red-400 font-light text-xs ml-4 mt-1">{error.message}</span>}
    </div>
  );
};

export default InputField;


