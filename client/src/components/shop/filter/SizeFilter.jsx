import React from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { FILTER_LIST } from '../../../constants/filterList';


export const SizeFilter = ({ 
  activeFilter, 
  onFilterChange 
}) => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <Accordion open={open === 1}>
      <AccordionHeader 
        onClick={() => handleOpen(1)}
        className="text-sm font-semibold"
      >
        Size
      </AccordionHeader>
      <AccordionBody>
        <div className="grid grid-cols-3 gap-2">
          {FILTER_LIST.SIZE.map((size) => (
            <div 
              key={size.value}
              className="flex items-center"
            >
              <input
                type="checkbox"
                id={size.value}
                value={size.value}
                checked={activeFilter.includes(size.value)}
                onChange={() => onFilterChange(size.value, 'size')}
                className="mr-2"
              />
              <label 
                htmlFor={size.value}
                className="text-sm"
              >
                {size.name}
              </label>
            </div>
          ))}
        </div>
      </AccordionBody>
    </Accordion>
  );
};