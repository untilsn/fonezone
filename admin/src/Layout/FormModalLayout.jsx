import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const FormModalLayout = ({ children, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // delay mở modal để có animation
    const timeout = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    // chạy animation ẩn trước khi gọi onClose
    setIsVisible(false);
    setTimeout(onClose, 300); // đợi animation chạy xong
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40">
      {/* overlay */}
      <div
        className={clsx(
          "absolute inset-0 transition-opacity duration-300",
          isVisible ? "opacity-100" : "opacity-0",
        )}
        onClick={handleClose}
      ></div>

      <div
        className={clsx(
          "relative z-10 w-full max-w-xl rounded-2xl bg-white p-8 shadow-lg transition-all duration-300",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 cursor-pointer rounded-3xl text-lg font-semibold transition-all hover:bg-gray-100"
        >
          <IoClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default FormModalLayout;
