import React from "react";
import { Accordion, AccordionHeader, AccordionBody, Checkbox } from "@material-tailwind/react";

export const FilterCheckbox = ({ title, filterList, activeFilter, onFilterChange }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Accordion open={open}>
      <AccordionHeader onClick={handleOpen} className="text-sm font-semibold">
        {title}
      </AccordionHeader>
      <AccordionBody>
        <div className="space-y-2">
          {filterList.map((item) => (
            <div key={item.value} className="flex items-center gap-4">
              <Checkbox
                type="checkbox"
                id={item.value}
                value={item.value}
                checked={activeFilter.includes(item.value)}
                onChange={() => onFilterChange(item.value, title.toLowerCase())}
                className="p-0 w-4 h-4 border-gray-400 rounded focus:ring-0 before:content-none"
                label={item.name}
              />
            </div>
          ))}
        </div>
      </AccordionBody>
    </Accordion>
  );
};
