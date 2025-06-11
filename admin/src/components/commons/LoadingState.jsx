import React from "react";

const LoadingState = ({ size = "md", color = "blue" }) => {
  // Size classes
  const sizeClasses = {
    sm: "h-6 w-6 border-2",
    md: "h-8 w-8 border-3",
    lg: "h-12 w-12 border-4",
  };

  // Color classes
  const colorClasses = {
    blue: "border-blue-500 border-t-transparent",
    gray: "border-gray-500 border-t-transparent",
    green: "border-green-500 border-t-transparent",
    red: "border-red-500 border-t-transparent",
    purple: "border-purple-500 border-t-transparent",
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`animate-spin rounded-full ${sizeClasses[size]} ${colorClasses[color]}`}
      ></div>
    </div>
  );
};

export default LoadingState;
