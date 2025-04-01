import { useState } from 'react';
import { FILTER_LIST } from '../../../constants/filterList';
import FilterBox from '../filter/FilterBox';
import FilterRange from '../filter/FilterRange';
import { FilterCheckbox } from '../filter/FilterCheckbox';
import FilterColor from '../filter/FilterColor';
import { useDispatch } from 'react-redux';
import { clearFilters } from '../../../redux/slice/filterSlice';

const ProductFilter = ({ filters, onFilterChange }) => {
  const dispatch = useDispatch()

  const handleCategoryChange = (value) => {
    const currentCategories = filters.category || [];
    const newCategories = currentCategories.includes(value)
      ? currentCategories.filter(c => c !== value)
      : [...currentCategories, value];

    onFilterChange({
      ...filters,
      category: newCategories
    });
  };

  const handleBrandChange = (value) => {
    const currentBrands = filters.brand || [];
    const newBrands = currentBrands.includes(value)
      ? currentBrands.filter(b => b !== value)
      : [...currentBrands, value];

    onFilterChange({
      ...filters,
      brand: newBrands
    });
  };

  const handleRamChange = (value) => {
    const currentRam = filters.ram || [];
    const newRam = currentRam.includes(value)
      ? currentRam.filter(c => c !== value)
      : [...currentRam, value];

    onFilterChange({
      ...filters,
      ram: newRam  // Fixed: was updating 'brand' instead of 'ram'
    });
  };

  const handleStorageChange = (value) => {
    const currentStorages = filters.storage || [];
    const newStorages = currentStorages.includes(value)
      ? currentStorages.filter(b => b !== value)
      : [...currentStorages, value];

    onFilterChange({
      ...filters,
      storage: newStorages
    });
  };

  const handleColorChange = (value) => {
    const currentColors = filters.color || [];
    const newColors = currentColors.includes(value)
      ? currentColors.filter(b => b !== value)
      : [...currentColors, value];

    onFilterChange({
      ...filters,
      color: newColors
    });
  };

  const handlePriceChange = (priceRange) => {
    onFilterChange({
      ...filters,
      priceRange
    });
  };


  return (
    <div className="flex">
      {/* Filters Sidebar */}
      <div className="w-full p-4 border-r">
        <div className='flex justify-between items-center mb-4'>
          <h1>Filter</h1>
          <button
            onClick={() => dispatch(clearFilters())}
            className='text-yellow font-medium text-sm'
          >clear all</button>
        </div>
        <FilterCheckbox
          title="Danh mục"
          filterList={FILTER_LIST.CATEGORY}
          activeFilter={filters.category}
          onFilterChange={handleCategoryChange}
        />
        <FilterCheckbox
          title="Hãng điện thoại"
          filterList={FILTER_LIST.BRAND}
          activeFilter={filters.brand}
          onFilterChange={handleBrandChange}
        />
        <FilterBox
          title="Ram"
          filterList={FILTER_LIST.RAM}
          activeFilter={filters.ram} // Fixed: was missing the correct prop
          onFilterChange={handleRamChange}
        />
        <FilterBox
          title="Dung lượng"
          filterList={FILTER_LIST.STORAGE}
          activeFilter={filters.storage}
          onFilterChange={handleStorageChange}
        />
        <FilterColor
          title="Màu sản phẩm"
          filterList={FILTER_LIST.COLOR}
          activeFilter={filters.color}
          onFilterChange={handleColorChange}
        />
        <FilterRange
          min={0}
          max={40000000}
          value={filters.priceRange} // Added: Pass current priceRange value to component
          onPriceChange={handlePriceChange}
        />
      </div>
    </div>
  );
};

export default ProductFilter;