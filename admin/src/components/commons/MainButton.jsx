import React from "react";

const MainButton = ({
  onClick = () => {},
  children = "button",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} p-3 text-xs font-medium text-white capitalize rounded-sm bg-primary`}
    >
      {children}
    </button>
  );
};

export default MainButton;
