import React, { useState } from "react";
import { useController } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import clsx from "clsx";

const InputField = ({
  name,
  control,
  label,
  type = "text",
  placeholder,
  icon,
  ...props
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, defaultValue: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="w-full space-y-1">
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      {/* Input Container */}
      <div
        className={clsx(
          "relative flex items-center rounded-lg border px-4 py-3 transition-all",
          isFocused
            ? "border-blue-500 ring-1 ring-blue-200"
            : "border-gray-300 hover:border-gray-400",
          error && "border-red-500 ring-1 ring-red-200"
        )}
      >
        {icon && <span className="mr-3 text-gray-400">{icon}</span>}

        <input
          {...field}
          id={name}
          type={inputType}
          placeholder={placeholder}
          className="w-full text-sm text-gray-700 placeholder-gray-400 outline-none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {type === "password" && (
          <button
            type="button"
            className="ml-2 text-gray-400 hover:text-gray-500"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <FaEyeSlash className="w-5 h-5" />
            ) : (
              <FaEye className="w-5 h-5" />
            )}
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && <p className="mt-1 text-xs text-red-500">{error.message}</p>}
    </div>
  );
};

export default InputField;
