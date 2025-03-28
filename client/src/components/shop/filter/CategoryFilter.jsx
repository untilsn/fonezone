import React from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { FILTER_LIST } from '../../../constants/filterList';


export const CategoryFilter = ({ 
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
        Category
      </AccordionHeader>
      <AccordionBody>
        <div className="space-y-2">
          {FILTER_LIST.CATEGORY.map((category) => (
            <div 
              key={category.value}
              className="flex items-center"
            >
              <input
                type="checkbox"
                id={category.value}
                value={category.value}
                checked={activeFilter.includes(category.value)}
                onChange={() => onFilterChange(category.value, 'category')}
                className="mr-2"
              />
              <label 
                htmlFor={category.value}
                className="text-sm"
              >
                {category.name}
              </label>
            </div>
          ))}
        </div>
      </AccordionBody>
    </Accordion>
  );
};