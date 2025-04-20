import React from "react";

const AuthHeader = ({ title, subTitle }) => {
  return (
    <div className="mb-5 text-center">
      <h1 className="mb-2 text-2xl font-semibold text-dark">{title}</h1>
      <h1 className="text-sm font-normal text-gray-500">{subTitle}</h1>
    </div>
  );
};

export default AuthHeader;
