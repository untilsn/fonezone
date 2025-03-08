import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const SubBanner = ({ type, name, image, buttonText, url, saveAmount }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="bg-yellow-50 py-3 px-5 bg-center bg-cover bg-no-repeat h-full">
      <span className="text-sm text-gray-500">{type}</span>
      <h3 className="text-lg font-medium text-gray-900 mt-1">{name}</h3>
      <button
        className=" text-sm flex items-center gap-2  py-2 text-yellow hover:text-yellow-dark hover:border-b  hover:border-yellow-dark transition duration-200"
      >
        {buttonText}<AiOutlineRight />

      </button>

    </div>
  );
};

export default SubBanner;