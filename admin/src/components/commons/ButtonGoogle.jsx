import React from "react";

const ButtonGoogle = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      variant="outlined"
      className="flex items-center justify-center w-full gap-3 p-3 mb-5 text-sm text-gray-700 transition-all border border-gray-400 hover:bg-gray-100 hover:text-primary-hover rounded-xl"
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
