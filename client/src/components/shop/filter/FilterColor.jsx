import React from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { FILTER_LIST } from '../../../constants/filterList';



export const FilterColor = ({ 
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
        Color
      </AccordionHeader>
      <AccordionBody>
        <div className="flex flex-wrap gap-2">
          {FILTER_LIST.COLOR.map((color) => (
            <div 
              key={color.value}
              className="relative"
            >
              <input
                type="checkbox"
                id={color.value}
                value={color.value}
                checked={activeFilter.includes(color.value)}
                onChange={() => onFilterChange(color.value, 'color')}
                className="absolute opacity-0 cursor-pointer"
                style={{ width: '24px', height: '24px' }}
              />
              <label 
                htmlFor={color.value}
                className="inline-block w-6 h-6 rounded-full border-2"
                style={{ 
                  backgroundColor: color.color,
                  borderColor: activeFilter.includes(color.value) ? 'black' : 'transparent'
                }}
              />
            </div>
          ))}
        </div>
      </AccordionBody>
    </Accordion>
  );
};