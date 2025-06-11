import React from "react";

const AuthHeader = ({ title, subTitle }) => {
  return (
    <div className="mb-8 text-center">
      <h1 className="mb-3 text-2xl font-bold text-gray-900">{title}</h1>
      <p className="text-gray-600">{subTitle}</p>
    </div>
  );
};

export default AuthHeader;
