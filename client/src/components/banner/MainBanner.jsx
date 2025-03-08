import React from "react";
import { Link } from "react-router-dom";

const MainBanner = ({ title, subTitle, price, image, buttonText, subPrice , url }) => {
  return (
    <div
      className="relative h-full w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="w-full py-10 px-20 h-[400px] inline-flex flex-col justify-center gap-4">
        <h2 className="text-xl font-light text-yellow">{title}</h2>
        <h1 className="text-5xl font-bold text-white max-w-[300px] w-full">
          {subTitle}
        </h1>
        <p className="flex items-start gap-1 text-white">
          <span className=" text-xl line-through" >
            {price}
          </span>
          <span className="text-5xl font-semibold text-yellow">
            {subPrice}
          </span>
          <span className="text-2xl font-semibold text-yellow">.99</span>
        </p>
        <button className="px-5 py-3 border-2 text-white font-semibold text-sm max-w-[200px] w-full hover:bg-white hover:text-yellow-dark transition-colors">{buttonText}</button>
      </div>
    </div>
  );
};

export default MainBanner;