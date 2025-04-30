import React from "react";

const ToggleButton = ({ checked, onChange }) => {
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={onChange}
      />
      <div className="peer peer-checked:bg-primary h-6 w-11 rounded-full bg-gray-300 transition-all duration-300"></div>
      <div className="absolute top-1 left-1 h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-300 peer-checked:translate-x-5"></div>
    </label>
  );
};

export default ToggleButton;
