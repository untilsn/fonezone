import React, { useState } from "react";
import CustomAccordion from "../../common/CustomAccordion";
import { FILTER_LIST } from "../../../constants/filterList";

const FilterColor = ({ activeFilter, onFilterChange }) => {
  const [open, setOpen] = useState(true);

  return (
    <CustomAccordion title="Màu sản phẩm" open={open} setOpen={setOpen}>
      <div className="flex flex-wrap gap-2">
        {FILTER_LIST.COLOR.map((color) => (
          <div key={color.value} className="relative">
            <input
              type="checkbox"
              id={color.value}
              value={color.value}
              checked={activeFilter.includes(color.value)}
              onChange={() => onFilterChange(color.value, "color")}
              className="absolute opacity-0 cursor-pointer"
              style={{ width: "24px", height: "24px" }}
            />
            <label
              htmlFor={color.value}
              className="inline-block w-6 h-6 rounded-full border-2"
              style={{
                backgroundColor: color.color,
                borderColor: activeFilter.includes(color.value) ? "black" : "transparent"
              }}
            />
          </div>
        ))}
      </div>
    </CustomAccordion>
  );
};

export default FilterColor;
