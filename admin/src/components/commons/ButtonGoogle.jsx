import clsx from "clsx";
import React from "react";

const ButtonGoogle = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      variant="outlined"
      className={clsx(
        "hover:text-primary-hover mb-5 flex w-full items-center justify-center gap-3 rounded-lg",
        "border border-gray-300 p-3 text-sm text-gray-700 transition-all hover:bg-gray-100",
      )}
    >
      <img
        src="https://docs.material-tailwind.com/icons/google.svg"
        alt="google"
        className="w-4 h-4"
      />
      Đăng nhập bằng Google
    </button>
  );
};

export default ButtonGoogle;
