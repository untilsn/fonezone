import React, { useState } from "react";
import CustomAccordion from "../../common/CustomAccordion";

const FilterBox = ({ title, filterList, activeFilter, onFilterChange }) => {
  const [open, setOpen] = useState(true);

  return (
    <CustomAccordion title={title} open={open} setOpen={setOpen}>
      <div className="flex flex-wrap gap-3">
        {filterList.map((item) => (
          <button
            key={item.value}
            onClick={() => onFilterChange(item.value, title.toLowerCase())}
            className={`px-2 py-2 text-[13px] border rounded transition-all
              ${activeFilter.includes(item.value) ? "bg-yellow-dark text-white" : "bg-white text-dark hover:bg-gray-200"}`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </CustomAccordion>
  );
};

export default FilterBox;
