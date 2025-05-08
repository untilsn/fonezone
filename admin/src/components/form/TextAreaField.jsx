import clsx from "clsx";
import React from "react";

const TextAreaField = ({
  value,
  onChange,
  name,
  placeholder,
  className = "",
}) => {
  return (
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={clsx(
        "min-h-24 w-full rounded-lg border border-gray-300 p-3 text-sm",
        "focus:ring-primary outline-none placeholder:font-normal placeholder:text-gray-600 placeholder:capitalize focus:ring",
        className,
      )}
    />
  );
};

export default TextAreaField;
