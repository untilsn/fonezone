import React from "react";
import clsx from "clsx";

const SecondaryButton = ({
  icon,
  children,
  isLoading,
  disabled,
  type = "button",
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={clsx(
        "flex w-full items-center justify-center gap-2 rounded px-4 py-2 font-semibold capitalize shadow",
        "hover:text-primary-active border border-gray-300 text-gray-600 transition-all hover:shadow-md",
        (disabled || isLoading) && "cursor-not-allowed opacity-50",
      )}
    >
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          {icon && <span className="text-xl">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default SecondaryButton;
