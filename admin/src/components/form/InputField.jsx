import React, { useState } from "react";
import { useController } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import clsx from "clsx";

const InputField = ({ control, name, label, type = "text", placeholder }) => {
  const {
    field,
    formState: { error },
  } = useController({
    name,
    control,
  });
  const [showPassword, setShowPasswor] = useState(false);
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="relative mb-5">
      {label && (
        <label htmlFor={name} className="mb-2 text-sm text-gray-600">
          {label}
        </label>
      )}
      <input
        {...field}
        id={name}
        type={inputType}
        className={clsx(
          "w-full outline-none text-sm border border-gray-400 rounded-xl p-3 placeholder:text-gray-600 placeholder:capitalize",
          type === "password" && "pr-10"
        )}
        placeholder={placeholder}
      />
      {type === "password" && (
        <button
          type="button"
          className="absolute text-gray-700 -translate-y-1/2 top-1/2 right-4"
          onClick={() => setShowPasswor((prev) => !prev)}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      )}
    </div>
  );
};

export default InputField;
