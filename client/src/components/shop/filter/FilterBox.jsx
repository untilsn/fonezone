import React, { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const FilterBox = ({ title, filterList, activeFilter, onFilterChange }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <Accordion open={open} className="border-b">
      <AccordionHeader
        onClick={handleOpen}
        className="text-sm font-semibold cursor-pointer py-4"
      >
        {title}
      </AccordionHeader>
      <AccordionBody>
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
      </AccordionBody>
    </Accordion>
  );
};

export default FilterBox;