import React from "react";

const EmptyState = ({ message = "Không có dữ liệu để hiển thị." }) => (
  <div className="py-8 text-center text-gray-500">{message}</div>
);

export default EmptyState;
