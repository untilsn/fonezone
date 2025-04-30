import React from "react";

const IsError = ({ message = "Đã xảy ra lỗi. Vui lòng thử lại sau." }) => {
  return <div className="py-6 text-center text-red-600">{message}</div>;
};

export default IsError;
