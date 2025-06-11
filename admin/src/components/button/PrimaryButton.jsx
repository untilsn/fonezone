import React from "react";
import clsx from "clsx";
import LoadingState from "../commons/LoadingState";

const PrimaryButton = ({
  icon,
  children,
  isLoading,
  disabled,
  type = "button",
  onClick,
  variant = "primary",
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={clsx(
        "flex h-11 w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all",
        "focus:ring-primary/50 focus:ring-2 focus:ring-offset-2 focus:outline-none",
        variant === "primary" && [
          "bg-primary text-white shadow-sm",
          !(disabled || isLoading) && "hover:bg-primary-active hover:shadow-md",
        ],
        variant === "secondary" && [
          "text-primary bg-gray-100 shadow-sm",
          !(disabled || isLoading) && "hover:bg-gray-200 hover:shadow-md",
        ],
        (disabled || isLoading) && [
          "cursor-not-allowed opacity-80",
          variant === "primary" ? "bg-primary/90" : "bg-gray-100/90",
        ],
        className,
      )}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <LoadingState className="h-5 w-5 border-2 border-white border-t-transparent" />
        </div>
      ) : (
        <>
          {icon && <span className="text-lg">{icon}</span>}
          <span className="whitespace-nowrap">{children}</span>
        </>
      )}
    </button>
  );
};

export default PrimaryButton;
