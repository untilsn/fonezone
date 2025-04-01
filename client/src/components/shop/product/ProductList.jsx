import React, { useState, useEffect } from 'react';
import { FaGripHorizontal, FaTh } from 'react-icons/fa';
import ProductCard from './ProductCard';
import Pagination from '../../common/Pagination';

const ProductList = ({ products: initialProducts }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOption, setSortOption] = useState('createdAt_desc');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid-4');

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

  const sortOptionLabels = {
    price_asc: 'Giá: Thấp đến Cao',
    price_desc: 'Giá: Cao đến Thấp',
    rating_desc: 'Đánh Giá Tốt Nhất',
    name_asc: 'Tên: A đến Z',
    name_desc: 'Tên: Z đến A',
    createdAt_desc: 'Mới Nhất',
    createdAt_asc: 'Cũ Nhất',
    view_desc: 'Xem Nhiều Nhất',
  };


  useEffect(() => {
    if (initialProducts) {
      setProducts(initialProducts);
      setFilteredProducts(initialProducts);
    }
  }, [initialProducts]);

  useEffect(() => {
    let result = [...products];

    if (searchQuery) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

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
    setCurrentPage(0);
  }, [sortOption, searchQuery, products]);

  const offset = currentPage * productsPerPage;
  const currentProducts = filteredProducts.slice(offset, offset + productsPerPage);
  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  // Calculate the product count display
  const startCount = filteredProducts.length === 0 ? 0 : offset + 1;
  const endCount = Math.min(offset + productsPerPage, filteredProducts.length);
  const totalCount = filteredProducts.length;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const getViewModeClasses = () => {
    return viewMode === 'grid-3'
      ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
      : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6';
  };

  return (
    <div id="product-list-container" className="mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="w-full md:w-auto">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full md:w-80 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          {/* Product count indicator */}
          <div className="text-sm text-gray-600 whitespace-nowrap">
            Hiển thị {startCount}–{endCount} trên {totalCount} sản phẩm
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid-3')}
              className={`p-2 border ${viewMode === 'grid-3' ? 'bg-gray-200' : ''}`}
            >
              <FaGripHorizontal />
            </button>
            <button
              onClick={() => setViewMode('grid-4')}
              className={`p-2 border ${viewMode === 'grid-4' ? 'bg-gray-200' : ''}`}
            >
              <FaTh />
            </button>
          </div>

          <select
            value={sortOption}
            onChange={handleSortChange}
            className="border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.keys(sortOptions).map(option => (
              <option key={option} value={option}>
                {sortOptionLabels[option]}
              </option>
            ))}
          </select>

        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-10">
          <h3 className="text-xl font-medium text-gray-600">No products found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div>
          <div className={getViewModeClasses()}>
            {currentProducts.map(product => (
              <ProductCard key={product.id} product={product} variant="vertical" />
            ))}

          </div>
          {/* paginate */}
          <Pagination
            currentPage={currentPage}
            totalItems={filteredProducts.length}
            itemsPerPage={productsPerPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProductList;