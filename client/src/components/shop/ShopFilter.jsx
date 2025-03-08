import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { useState } from "react";
import FilterBrand from "./filter/FilterBrand";
import FilterRange from "./filter/FilterRange";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ShopFilter = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (index) => setOpen(open === index ? 0 : index);

  return (
    <div className="">
      <div className="flex items-center">
        <h1></h1>
        <button></button>
      </div>
      <div className="w-full p-4 border">
        {/* Filter theo Thương Hiệu */}
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)} className="flex justify-between items-center">
            <span>Thương hiệu</span>
            {open === 1 ? <FaChevronUp className="w-5 h-5" /> : <FaChevronDown className="w-5 h-5" />}
          </AccordionHeader>
          <AccordionBody>
            <FilterBrand />
          </AccordionBody>
        </Accordion>

        {/* Filter theo Giá */}
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)} className="flex justify-between items-center">
            <span>Khoảng giá</span>
            {open === 2 ? <FaChevronUp className="w-5 h-5" /> : <FaChevronDown className="w-5 h-5" />}
          </AccordionHeader>
          <AccordionBody>
            <FilterRange />
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default ShopFilter;
