import React, { useState, useEffect } from "react";
import { Range } from "react-range";
import { useDebounce } from "use-debounce";
import CustomAccordion from "../../common/CustomAccordion";
import formatPrice from "../../../utils/formatPrice";

const FilterRange = ({ min = 0, max = 10000, step = 100, onPriceChange }) => {
  const [priceRange, setPriceRange] = useState([min, max]);
  const [open, setOpen] = useState(true);

  const [debouncedPriceRange] = useDebounce(priceRange, 1000);

  useEffect(() => {
    onPriceChange(debouncedPriceRange);
  }, [debouncedPriceRange]);

  const handlePriceChange = (values) => {
    setPriceRange(values);
  };

  return (
    <CustomAccordion title="Phạm vi giá" open={open} setOpen={setOpen}>
      <div className="py-2 px-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-gray-700 mt-1">{formatPrice(priceRange[0])}</span>
          <span className="text-xs text-gray-700 mt-1">{formatPrice(priceRange[1])}</span>
        </div>
        <Range
          step={step}
          min={min}
          max={max}
          values={priceRange}
          onChange={handlePriceChange}
          renderTrack={({ props, children }) => {
            const { key, ...restProps } = props;
            return (
              <div
                key={key}
                {...restProps}
                className="w-full h-2 bg-gray-200 rounded-sm relative"
              >
                {children}
              </div>
            );
          }}
          renderThumb={({ props }) => {
            const { key, ...restProps } = props;
            return (
              <div
                key={key}
                {...restProps}
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
              className="w-28 border px-2 py-1 text-sm"
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
              className="w-28 border px-2 py-1 text-sm"
            />
          </div>
        </div>
      </div>
    </CustomAccordion>
  );
};

export default FilterRange;