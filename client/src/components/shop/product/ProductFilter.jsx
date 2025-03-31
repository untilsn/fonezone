import { useState } from 'react';
import { FilterColor } from '../filter/FilterColor';
import { FILTER_LIST } from '../../../constants/filterList';
import FilterBox from '../filter/FilterBox';
import { FilterRange } from '../filter/FilterRange';
import { FilterCheckbox } from '../filter/FilterCheckbox';



const ProductFilter = () => {
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    ram: [],
    storage: [],
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
      brands: filters.brand,
      rams: filters.ram,
      storages: filters.storage,
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
        <FilterCheckbox
          title="Category"
          filterList={FILTER_LIST.CATEGORY}
          activeFilter={filters.category}
          onFilterChange={handleFilterChange}
        />
        <FilterCheckbox
          title="Brand"
          filterList={FILTER_LIST.BRAND}
          activeFilter={filters.brand}
          onFilterChange={handleFilterChange}
        />
        <FilterBox
          title="Ram"
          filterList={FILTER_LIST.RAM}
          activeFilter={filters.ram}
          onFilterChange={handleFilterChange}
        />
        <FilterBox
          title="Storage"
          filterList={FILTER_LIST.STORAGE}
          activeFilter={filters.storage}
          onFilterChange={handleFilterChange}
        />
        <FilterColor
          activeFilter={filters.color}
          onFilterChange={handleFilterChange}
        />
        <FilterRange
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