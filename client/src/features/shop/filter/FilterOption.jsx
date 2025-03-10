import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import FilterCheckbox from "./FilterCheckbox";
import FilterRange from "./FilterRange";

const Icon = ({ isOpen }) => (
  <div className="text-opacity-30">
    {isOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
  </div>
);

const FilterContent = ({ filter }) => {
  switch (filter.type) {
    case "checkbox":
      return <FilterCheckbox options={filter.options} />;
    case "range":
      return (
        // <FilterRange
        //   min={filter.min}
        //   max={filter.max}
        //   step={filter.step || 1}
        // />
        <div>
          home
        </div>
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
          className="text-sm font-medium tracking-widest capitalize border-opacity-40 text-darkPrimary hover:text-darkPrimary text-opacity-80 w-full flex justify-between items-center"
          onClick={onToggle}
        >
          {filter.title}
        </AccordionHeader>
        <AccordionBody className="py-3 text-sm font-medium capitalize text-darkPrimary">
          <FilterContent filter={filter} />
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default FilterOption;