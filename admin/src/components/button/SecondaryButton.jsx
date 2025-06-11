import React from "react";
import clsx from "clsx";
import LoadingState from "../commons/LoadingState";

const SecondaryButton = ({
  icon,
  children,
  isLoading,
  disabled,
  className,
  type = "button",
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={clsx(
        "flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium shadow-sm transition-all",
        "text-gray-700 hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900 hover:shadow-md",
        "focus:ring-2 focus:ring-gray-300/50 focus:ring-offset-2 focus:outline-none",
        (disabled || isLoading) && [
          "cursor-not-allowed opacity-80",
          "hover:border-gray-300 hover:bg-transparent hover:text-gray-700 hover:shadow-sm",
        ],
        className,
      )}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <LoadingState className="h-5 w-5 border-2 border-gray-500 border-t-transparent" />
        </div>
      ) : (
        <>
          {icon && <span className="text-lg">{icon}</span>}
          <span className="w-full whitespace-nowrap">{children}</span>
        </>
      )}
    </button>
  );
};

export default SecondaryButton;
