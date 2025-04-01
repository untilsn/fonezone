import React, { useState } from "react";
import HeaderPage from "../components/layout/HeaderPage";
import BreadcrumbPage from "../components/layout/BreadcrumbPage";
import ProductFilter from "../components/shop/product/ProductFilter";
import ProductList from "../components/shop/product/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../redux/slice/filterSlice";
import { useProducts } from "../hooks/useProduct";

const ShopPage = () => {
  const filters = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  // State cho UI
  const [sortOption, setSortOption] = useState("createdAt_desc");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid-3");
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 10;

  // Hook lấy dữ liệu sản phẩm
  const { products, filteredProducts, setFilteredProducts, loading } = useProducts(
    filters, sortOption, searchQuery, currentPage, productsPerPage
  );
  console.log(products)
  // Cập nhật filter từ ProductFilter
  const handleFilterChange = (newFilters) => {
    dispatch(updateFilters(newFilters));
  };

  return (
    <div>
      <HeaderPage />
      <BreadcrumbPage />
      <div className="container grid-layout">
        <div className="col-span-3">
          <ProductFilter filters={filters} onFilterChange={handleFilterChange} />
        </div>
        <div className="col-span-9">
          <ProductList
            products={products}
            loading={loading}
            sortOption={sortOption}
            setSortOption={setSortOption}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            viewMode={viewMode}
            setViewMode={setViewMode}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
            productsPerPage={productsPerPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
