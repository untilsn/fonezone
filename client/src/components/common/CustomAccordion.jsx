import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react";
import { FaChevronDown } from "react-icons/fa";

const CustomAccordion = ({ title, open, setOpen, children }) => {
  const handleOpen = () => setOpen(!open);

  const AccordionIcon = ({ open }) => (
    <FaChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
  );

  return (
    <Accordion open={open} icon={<AccordionIcon open={open} />}>
      <AccordionHeader onClick={handleOpen} className="text-sm text-gray-dark font-semibold flex items-center justify-between">
        {title}
      </AccordionHeader>
      <AccordionBody>{children}</AccordionBody>
    </Accordion>
  );
};

export default CustomAccordion;