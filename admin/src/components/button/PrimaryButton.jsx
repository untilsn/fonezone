import React from "react";
import clsx from "clsx";

const PrimaryButton = ({
  icon,
  children,
  isLoading,
  disabled,
  type = "button",
  onClick,
  variant = "primary", // primary (nền đậm) | light (nền nhạt)
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={clsx(
        "flex w-full items-center justify-center gap-2",
        variant === "primary" &&
          "bg-primary hover:bg-primary-active text-white",
        variant === "secondary" &&
          "text-primary hover:bg-primary bg-gray-200 shadow-2xl hover:text-white",
        (disabled || isLoading) && "cursor-not-allowed opacity-50",
        className,
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

export default PrimaryButton;
