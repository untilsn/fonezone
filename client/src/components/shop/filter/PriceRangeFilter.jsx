import React, { useState } from 'react';
import { Range } from 'react-range';
import { 
  Accordion, 
  AccordionHeader, 
  AccordionBody 
} from '@material-tailwind/react';

export const PriceRangeFilter = ({ 
  min = 0, 
  max = 10000, 
  step = 100,
  onPriceChange 
}) => {
  const [priceRange, setPriceRange] = useState([min, max]);
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const handlePriceChange = (values) => {
    setPriceRange(values);
    onPriceChange(values);
  };

  return (
    <Accordion open={open === 1}>
      <AccordionHeader 
        onClick={() => handleOpen(1)}
        className="text-sm font-semibold"
      >
        Price Range
      </AccordionHeader>
      <AccordionBody>
        <div className="px-4 py-2">
          <Range
            step={step}
            min={min}
            max={max}
            values={priceRange}
            onChange={handlePriceChange}
            renderTrack={({ props, children }) => {
              // Destructure key out of props
              const { key, ...restProps } = props;
              return (
                <div
                  key={key}
                  {...restProps}
                  className="w-full h-2 bg-gray-200 rounded-md relative"
                >
                  {children}
                </div>
              );
            }}
            renderThumb={({ props, index }) => {
              // Destructure key out of props
              const { key, ...restProps } = props;
              return (
                <div
                  key={key}
                  {...restProps}
                  className="w-5 h-5 bg-blue-500 bg-yellow rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              );
            }}
          />
          
          {/* Price Display */}
          <div className="flex justify-between mt-4">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Min</span>
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => {
                  const newMin = Math.min(
                    Number(e.target.value), 
                    priceRange[1] - step
                  );
                  handlePriceChange([newMin, priceRange[1]]);
                }}
                className="w-20 border rounded px-2 py-1 text-sm"
              />
            </div>
            
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Max</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => {
                  const newMax = Math.max(
                    Number(e.target.value), 
                    priceRange[0] + step
                  );
                  handlePriceChange([priceRange[0], newMax]);
                }}
                className="w-20 border rounded px-2 py-1 text-sm"
              />
            </div>
          </div>
        </div>
      </AccordionBody>
    </Accordion>
  );
};