import React, { useState } from "react";
import { Range } from "react-range";
import CustomAccordion from "../../common/CustomAccordion";

const FilterRange = ({ min = 0, max = 10000, step = 100, onPriceChange }) => {
  const [priceRange, setPriceRange] = useState([min, max]);
  const [open, setOpen] = useState(true);

  const handlePriceChange = (values) => {
    setPriceRange(values);
    onPriceChange(values);
  };

  return (
    <CustomAccordion title="Phạm vi giá" open={open} setOpen={setOpen}>
      <div className="px-4 py-2">
        <Range
          step={step}
          min={min}
          max={max}
          values={priceRange}
          onChange={handlePriceChange}
          renderTrack={({ props, children }) => {
            // Tách key ra khỏi props
            const { key, ...restProps } = props;
            return (
              <div
                key={key} // Truyền key trực tiếp
                {...restProps} // Spread các props còn lại
                className="w-full h-2 bg-gray-200 rounded-md relative"
              >
                {children}
              </div>
            );
          }}
          renderThumb={({ props }) => {
            // Tách key ra khỏi props
            const { key, ...restProps } = props;
            return (
              <div
                key={key} // Truyền key trực tiếp
                {...restProps} // Spread các props còn lại
                className="w-3 h-3 bg-yellow rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-dark"
              />
            );
          }}
        />
        
        {/* Price Display */}
        <div className="flex justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Min</span>
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => {
                const newMin = Math.min(
                  Number(e.target.value),
                  priceRange[1] - step
                );
                handlePriceChange([newMin, priceRange[1]]);
              }}
              className="w-20 border rounded px-2 py-1 text-sm"
            />
          </div>
          
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Max</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => {
                const newMax = Math.max(
                  Number(e.target.value),
                  priceRange[0] + step
                );
                handlePriceChange([priceRange[0], newMax]);
              }}
              className="w-20 border rounded px-2 py-1 text-sm"
            />
          </div>
        </div>
      </div>
    </CustomAccordion>
  );
};

export default FilterRange;