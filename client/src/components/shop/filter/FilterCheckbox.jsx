import React from "react";
import { Checkbox } from "@material-tailwind/react";
import CustomAccordion from "../../common/CustomAccordion";

export const FilterCheckbox = ({ title, filterList, activeFilter, onFilterChange }) => {
  const [open, setOpen] = React.useState(true);


  return (
    <CustomAccordion title={title} open={open} setOpen={setOpen}>
      <div className="space-y-2">
        {filterList.map((item) => (
          <div key={item.value} className="flex items-center gap-4">
            <Checkbox
              type="checkbox"
              id={item.value}
              value={item.value}
              checked={activeFilter.includes(item.value)}
              onChange={() => onFilterChange(item.value, title.toLowerCase())}
              className=" w-4 h-4 border-gray-400 rounded focus:ring-0 before:content-none"
              label={item.name}
            />
          </div>
        ))}
      </div>
    </CustomAccordion>
  );
};
