import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { getAllProduct } from "../api/productApi";

export const useProducts = (
  filters,
  sortOption,
  searchQuery,
  currentPage,
  productsPerPage,
) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Debounce giá trị để giảm số lần gọi API
  const [debouncedFilters] = useDebounce(filters, 500);
  const [debouncedSort] = useDebounce(sortOption, 500);
  const [debouncedSearch] = useDebounce(searchQuery, 500);
  const [debouncedPage] = useDebounce(currentPage, 300);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const params = {
          page: debouncedPage + 1,
          limit: productsPerPage,
          sort: debouncedSort,
          search: debouncedSearch,
          category: debouncedFilters.category,
          brand: debouncedFilters.brand?.join(","),
          ram: debouncedFilters.ram?.join(","),
          storage: debouncedFilters.storage?.join(","),
          color: debouncedFilters.color?.join(","),
          minPrice: debouncedFilters.priceRange?.[0],
          maxPrice: debouncedFilters.priceRange?.[1],
        };

        console.log("Fetching products with params:", params);
        const response = await getAllProduct(params);
        setProducts(response?.data || []);
        setFilteredProducts(response?.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
        setFilteredProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [
    debouncedFilters,
    debouncedSort,
    debouncedSearch,
    debouncedPage,
    productsPerPage,
  ]);

  return { products, filteredProducts, setFilteredProducts, loading };
};
