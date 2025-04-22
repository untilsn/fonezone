import React, { useState } from "react";
import { useController } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import clsx from "clsx";

const InputField = ({
  control,
  name,
  label,
  type = "text",
  placeholder,
  className = "",
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className={clsx("mb-5 w-full", className)}>
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-xs font-medium text-gray-700 capitalize"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          {...field}
          id={name}
          type={inputType}
          placeholder={placeholder}
          className={clsx(
            "w-full rounded-lg border p-3 text-sm outline-none placeholder:text-gray-600 placeholder:capitalize",
            error
              ? "border-danger focus:border-danger"
              : "border-gray-400 focus:border-blue-500",
            type === "password" && "pr-10",
          )}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute text-gray-600 -translate-y-1/2 top-1/2 right-3 focus:outline-none"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-danger">{error.message}</p>}
    </div>
  );
};

export default InputField;
