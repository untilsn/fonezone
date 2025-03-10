import React, { useState } from "react";
import { FILTERLIST } from "../../constants/filterList";
import FilterOption from "./filter/FilterOption";

const ProductFilter = () => {
  const [openAcc, setOpenAcc] = useState({
    brand: false,
    price: false,
    ram: false,
  });

  const toggleAccordion = (key) => {
    setOpenAcc((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleClearAll = () => {
    // Logic để reset filter (tùy thuộc vào yêu cầu của bạn)
    console.log("Clear all filters");
  };

  return (
    <div className="w-full p-4">
      {/* Heading */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-darkGray font-semibold text-lg">Filter by</h1>
        <button className="text-yellowColor" onClick={handleClearAll}>
          clear all
        </button>
      </div>

      {/* Filter */}
      <div>
        {FILTERLIST.map((filter) => (
          <FilterOption
            key={filter.key}
            filter={{
              ...filter,
              isOpen: openAcc[filter.key],
            }}
            onToggle={() => toggleAccordion(filter.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;