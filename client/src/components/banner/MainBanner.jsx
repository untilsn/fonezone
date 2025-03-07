import React from "react";
import { Link } from "react-router-dom";

const MainBanner = ({ title, subTitle, price, image, buttonText, url }) => {
  return (
    <div
      className="relative h-full w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
     <div className="w-full py-10 px-20 h-[400px] inline-flex flex-col justify-center gap-4">
        <h2 className="text-xl font-light text-yellowColor">{title}</h2>
        <h1 className="text-5xl font-bold text-white">
          {title} <br />
          {subTitle}
        </h1>
        <p className="flex items-start gap-1 text-white">
          <span
            className={`${
              price === "$49,99" ? " line-through" : ""
            } text-xl`}
          >
            {price}
          </span>
          <span className="text-5xl font-semibold text-yellowColor">
            {price}
          </span>
          <span className="text-2xl font-semibold text-yellowColor">.99</span>
        </p>
      </div>
    </div>
  );
};

export default MainBanner;