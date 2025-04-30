import React from "react";

const FormModalLayout = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40">
      {/* overlay */}
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="relative z-10 w-full max-w-xl rounded-2xl bg-white p-8 shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default FormModalLayout;
