import React from 'react';

const IconButton = ({ icon, label, count, onClick, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex flex-col gap-2 group items-center  p-2 rounded-full ${className}`}
      {...props}
    >
      {/* Biểu tượng (sử dụng thư viện như react-icons hoặc SVG tùy chỉnh) */}
      <span className="">{icon}</span>
      {/* Nhãn (tùy chọn, ẩn trực quan nhưng có thể tiếp cận) */}
      <span className="text-xs">{label}</span>
      {/* Huy hiệu số lượng cho giỏ hàng */}
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
};

export default IconButton;