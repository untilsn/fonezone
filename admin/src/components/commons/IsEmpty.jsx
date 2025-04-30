import React from "react";

const IsEmpty = ({ message = "Không có dữ liệu để hiển thị." }) => {
  return (
    <div>
      <div className="py-6 text-center text-gray-500">{message}</div>
    </div>
  );
};

export default IsEmpty;
