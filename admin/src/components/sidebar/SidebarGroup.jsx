import React from "react";

const SidebarGroup = ({ title = "home", children }) => {
  return (
    <div className="">
      <h4 className="mb-2 text-xs font-semibold uppercase text-text-light">
        {title}
      </h4>
      <div>{children}</div>
    </div>
  );
};

export default SidebarGroup;
