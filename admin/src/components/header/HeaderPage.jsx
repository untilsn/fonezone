import React from "react";
import Breadcrumb from "../commons/BreadCrumb";

const HeaderPage = ({ title, children }) => {
  return (
    <div className="flex items-center justify-between mb-10">
      <div className="">
        <Breadcrumb></Breadcrumb>
        <h1 className="px-2 text-xl">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default HeaderPage;
