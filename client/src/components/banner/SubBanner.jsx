import React from "react";
import { Link } from "react-router-dom";

const SubBanner = ({ type, name, image, buttonText, url, saveAmount }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="bg-yellow-50 py-3 px-5 bg-center bg-cover bg-no-repeat h-full">
      <span className="text-sm text-gray-500">{type}</span>
      <h3 className="text-lg font-medium text-gray-900 mt-1">{name}</h3>
      <button
        className="mt-1 test-sm inline-block text-yellow "
      >
        {buttonText} &gt;
      </button>
    </div>
  );
};

export default SubBanner;