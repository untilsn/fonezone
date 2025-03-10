import React, { useState } from "react";
import Slider from "rc-slider"; // Chỉ import Slider
import "rc-slider/assets/index.css"; // Import CSS mặc định
import formatPrice from "../../../utils/formatPrice";

const FilterRange = ({ max, min, step }) => {
  const [priceRange, setPriceRange] = useState([min, max]);

  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
  };

  return (
    <div className="w-full max-w-md mx-auto py-4 bg-gray-300 rounded-lg">
      {/* Slider */}
      <Slider
        range // Kích hoạt chế độ range slider
        className="w-full mb-5"
        min={min}
        max={max}
        step={step}
        value={priceRange}
        onChange={handlePriceChange}
        handleStyle={{
          borderRadius: "50%",
          width: "12px",
          height: "12px",
          backgroundColor: "#c4906f",
          border: "none",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          outline: "none",
          top: "-5px",
        }}
        trackStyle={{
          backgroundColor: "#c4906f",
          height: "6px",
        }}
        railStyle={{
          backgroundColor: "#e0e0e0",
          height: "6px",
        }}
        ariaLabelForHandle={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
      />

      {/* Hiển thị giá trị min và max */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs text-darkPrimary mb-5">range</span>
          <div className="flex gap-2 text-sm font-semibold text-darkPrimary mb-2">
            <span>{formatPrice(priceRange[0])}</span>
            <span>-</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>
        </div>
        <button className="py-3 px-7 border border-darkPrimary text-xs">Filter</button>
      </div>
    </div>
  );
};

export default FilterRange;