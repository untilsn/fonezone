
import React, { useState, useEffect } from 'react';
import { FaList, FaGripHorizontal, FaGripVertical, FaTh } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import ProductCard from './ProductCard';

const ProductList = ({ products: initialProducts, categories }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOption, setSortOption] = useState('createdAt_desc');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid', 'list', 'compact', 'large'

  const productsPerPage = 8;

  const sortOptions = {
    price_asc: { price: 1 },
    price_desc: { price: -1 },
    rating_desc: { rating: -1 },
    name_asc: { name: 1 },
    name_desc: { name: -1 },
    createdAt_desc: { createdAt: -1 },
    createdAt_asc: { createdAt: 1 },
    view_desc: { view: -1 },
  };

  // Display names for sort options
  const sortOptionLabels = {
    price_asc: 'Price: Low to High',
    price_desc: 'Price: High to Low',
    rating_desc: 'Best Rating',
    name_asc: 'Name: A to Z',
    name_desc: 'Name: Z to A',
    createdAt_desc: 'Newest First',
    createdAt_asc: 'Oldest First',
    view_desc: 'Most Viewed',
  };

  useEffect(() => {
    if (initialProducts) {
      setProducts(initialProducts);
      setFilteredProducts(initialProducts);
    }
  }, [initialProducts]);

  useEffect(() => {
    // Apply search filter
    let result = [...products];

    if (searchQuery) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    const [sortKey, sortDirection] = Object.entries(sortOptions[sortOption])[0];
    result = [...result].sort((a, b) => {
      if (sortKey === 'name') {
        return sortDirection === 1
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      return sortDirection === 1
        ? a[sortKey] - b[sortKey]
        : b[sortKey] - a[sortKey];
    });

    setFilteredProducts(result);
    setCurrentPage(0); // Reset to first page when filtering/sorting
  }, [sortOption, searchQuery, products]);

  // Get current page products
  const offset = currentPage * productsPerPage;
  const currentProducts = filteredProducts.slice(offset, offset + productsPerPage);
  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);

    // Scroll to top of product list
    window.scrollTo({
      top: document.getElementById('product-list-container').offsetTop - 100,
      behavior: 'smooth'
    });
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const getViewModeClasses = () => {
    switch (viewMode) {
      case 'list':
        return 'flex flex-col gap-4';
      case 'compact':
        return 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3';
      case 'large':
        return 'grid grid-cols-1 sm:grid-cols-2 gap-6';
      case 'grid':
      default:
        return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4';
    }
  };

  return (
    <div id="product-list-container" className="container mx-auto w-full">
      {/* Search and sort header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="w-full md:w-auto">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full md:w-80 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="text-sm text-gray-500">
            Showing {offset + 1}-{Math.min(offset + productsPerPage, filteredProducts.length)} of {filteredProducts.length} Products
          </div>

          <div className="flex items-center gap-2">
            <div className="flex border border-gray-300 ">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-gray-200' : ''}`}
                aria-label="Grid view"
              >
                <FaGripHorizontal />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-gray-200' : ''}`}
                aria-label="List view"
              >
                <FaList />
              </button>
              <button
                onClick={() => setViewMode('compact')}
                className={`p-2 ${viewMode === 'compact' ? 'bg-gray-200' : ''}`}
                aria-label="Compact view"
              >
                <FaTh />
              </button>
              <button
                onClick={() => setViewMode('large')}
                className={`p-2 ${viewMode === 'large' ? 'bg-gray-200' : ''}`}
                aria-label="Large view"
              >
                <FaGripVertical />
              </button>
            </div>

            <select
              value={sortOption}
              onChange={handleSortChange}
              className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Object.keys(sortOptions).map(option => (
                <option key={option} value={option}>
                  {sortOptionLabels[option]}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-10">
          <h3 className="text-xl font-medium text-gray-600">No products found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div className={getViewModeClasses()}>
          {currentProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              variant={viewMode === 'list' ? 'horizontal' : 'vertical'}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      {pageCount > 1 && (
        <div className="mt-8 flex justify-center">
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName={'flex items-center gap-2'}
            pageClassName={'border border-gray-300 rounded-md'}
            pageLinkClassName={'inline-block px-3 py-1.5 hover:bg-gray-100'}
            previousClassName={'border border-gray-300 rounded-md'}
            previousLinkClassName={'inline-block px-3 py-1.5 hover:bg-gray-100'}
            nextClassName={'border border-gray-300 rounded-md'}
            nextLinkClassName={'inline-block px-3 py-1.5 hover:bg-gray-100'}
            breakClassName={'border border-gray-300 rounded-md'}
            breakLinkClassName={'inline-block px-3 py-1.5'}
            activeClassName={'border-blue-500 bg-blue-50'}
            activeLinkClassName={'text-blue-600 font-medium'}
            forcePage={currentPage}
          />
        </div>
      )}
    </div>
  );
};

export default ProductList