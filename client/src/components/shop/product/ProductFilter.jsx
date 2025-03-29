import { useState } from 'react';
import { CategoryFilter } from '../filter/CategoryFilter';
import { ColorFilter } from '../filter/ColorFilter';
import { SizeFilter } from '../filter/SizeFilter';
import { PriceRangeFilter } from '../filter/PriceRangeFilter';



const ProductFilter = () => {
  const [filters, setFilters] = useState({
    category: [],
    color: [],
    size: [],
    priceRange: [0, 10000]
  });

  const handleFilterChange = (value, type) => {
    setFilters(prev => {
      const currentFilters = prev[type];
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter(f => f !== value)
        : [...currentFilters, value];
      
      return { ...prev, [type]: newFilters };
    });
  };

  const handlePriceChange = (priceRange) => {
    setFilters(prev => ({ ...prev, priceRange }));
  };

  const applyFilters = () => {
    // Call API with filters
    const apiFilters = {
      categories: filters.category,
      colors: filters.color,
      sizes: filters.size,
      minPrice: filters.priceRange[0],
      maxPrice: filters.priceRange[1]
    };
    
    // Example API call
    fetchProducts(apiFilters);
  };


  return (
    <div className="flex">
      {/* Filters Sidebar */}
      <div className="w-64 p-4 border-r">
        <CategoryFilter 
          activeFilter={filters.category}
          onFilterChange={handleFilterChange}
        />
        <ColorFilter 
          activeFilter={filters.color}
          onFilterChange={handleFilterChange}
        />
        <SizeFilter 
          activeFilter={filters.size}
          onFilterChange={handleFilterChange}
        />
        <PriceRangeFilter 
          min={0}
          max={10000}
          onPriceChange={handlePriceChange}
        />
        <button 
          onClick={applyFilters}
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded"
        >
          Apply Filters
        </button>
      </div>

      {/* Products List */}
      <div className="flex-1">
        {/* Render products here */}
      </div>
    </div>
  )
}

export default ProductFilter