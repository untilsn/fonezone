import React, { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
import FilterCheckbox from "./FilterCheckbox";
import FilterRange from './FilterRange';


const Icon = ({ isOpen }) => (
  <IoIosArrowDown
    className={`${isOpen ? "rotate-180" : ""} h-3 w-3 transition-transform text-opacity-30`}
  />
);

const FilterContent = ({ filter }) => {
  const [value, setValue] = useState(1000000);

  const handleRangeChange = (event) => {
    setValue(Number(event.target.value));
  };


  switch (filter.type) {
    case "checkbox":
      return <FilterCheckbox options={filter.options} />;
    case "range":
      return (
        <FilterRange
          min={filter.min}
          max={filter.max}
          step={filter.step || 1000000}
          value={value}
          onChange={handleRangeChange}
        />
      );
    default:
      return null;
  }
};

const FilterOption = ({ filter, onToggle }) => {
  return (
    <div>
      <Accordion open={filter.isOpen} icon={<Icon isOpen={filter.isOpen} />}>
        <AccordionHeader
          className="text-sm font-medium tracking-widest capitalize border-opacity-40 text-darkPrimary hover:text-darkPrimary text-opacity-80"
          onClick={onToggle}
        >
          {filter.title}
        </AccordionHeader>
        <AccordionBody className="py-3 text-sm font-medium capitalize text-darkPrimary">
          <FilterContent filter={filter} />
        </AccordionBody>
      </Accordion>
    </div>
  )
}


export default FilterOption;
