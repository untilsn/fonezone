import React, { useState } from "react";
import Slider, { range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import formatPrice from "../../../utils/formatPrice";

const FilterRange = ({
  max = 40000000,
  min = 30000,
  step = 1000000
}) => {
  const [priceRange, setPriceRange] = useState([min, max]);

  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
  };

  return (
    <div className="w-full max-w-md mx-auto py-4 bg-gray-300 rounded-lg px-4">
      {/* Slider */}
      <Slider range
        className="mb-5"
        min={min}
        max={max}
        step={step}
        value={priceRange}
        onChange={handlePriceChange}
        allowCross={false}
        trackStyle={[{ backgroundColor: "#c4906f", height: 4 }]}
        handleStyle={[
          {
            borderColor: "#c4906f",
            backgroundColor: "#c4906f",
            height: 16,
            width: 16,
            marginTop: -6
          },
          {
            borderColor: "#c4906f",
            backgroundColor: "#c4906f",
            height: 16,
            width: 16,
            marginTop: -6
          }
        ]}
        railStyle={{
          backgroundColor: "#e0e0e0",
          height: 4
        }}
      />

      {/* Display min and max values */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <span className="text-xs text-darkPrimary block mb-1">Range</span>
          <div className="flex gap-2 text-sm font-semibold text-darkPrimary">
            <span>{formatPrice(priceRange[0])}</span>
            <span>-</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>
        </div>
        <button
          className="py-2 px-6 border border-darkPrimary text-xs rounded"
          onClick={() => {
            console.log('Filtering with range:', priceRange);
          }}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterRange;