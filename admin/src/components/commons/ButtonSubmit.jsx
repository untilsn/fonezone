import React from "react";

const ButtonSubmit = ({ children }) => {
  return (
    <button
      className="w-full p-3 font-semibold text-white capitalize transition-all bg-primary rounded-xl hover:bg-primary-active"
      type="submit"
    >
      {children}
    </button>
  );
};

export default ButtonSubmit;
