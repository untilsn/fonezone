import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { useState } from "react";
import FilterBrand from "./filter/FilterBrand";
import FilterRange from "./filter/FilterRange";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Icon({ id, open }) {
  return (
    <IoMdArrowDropup
      className={`${id === true ? "rotate-180" : ""
        } h-5 w-5 transition-transform text-opacity-50`}
    />
  );
}

const ShopFilter = () => {
  const [openAcc1, setOpenAcc1] = useState(true);
  const [openAcc2, setOpenAcc2] = useState(true);
  const [openAcc3, setOpenAcc3] = useState(true);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);


  return (
    <div className="w-full p-4">
      {/* Filter theo Thương Hiệu */}
      <Accordion
        open={openAcc1}
        icon={<span>{open === 1 ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}</span>}
      >
        <AccordionHeader className="text-sm" onClick={() => handleOpen(1)}>
          Thương hiệu
        </AccordionHeader>
        <AccordionBody>
          <FilterBrand />
        </AccordionBody>
      </Accordion>

      {/* Filter theo Giá */}
      <Accordion
        open={open === 2}
        icon={<span>{open === 2 ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}</span>}
      >
        <AccordionHeader className="text-sm" onClick={() => handleOpen(2)}>
          Khoảng giá
        </AccordionHeader>
        <AccordionBody>
          <FilterRange />
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default ShopFilter;
