import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import Pagination from "../commons/Pagination";
import SecondaryButton from "../button/SecondaryButton";
import SelectField from "../form/SelectField";

/**
 * TableLayout Component - Provides standard layout wrapper for tables
 * with search, filter and pagination controls
 *
 * @param {Object} props
 * @param {ReactNode} props.children - Table component
 * @param {Function} props.onSearch - Search callback function
 * @param {Function} props.onFilter - Filter callback function
 * @param {string} props.searchPlaceholder - Placeholder for search input
 * @param {boolean} props.showFilter - Show filter button
 * @param {boolean} props.showPagination - Show pagination component
 * @param {number} props.totalItems - Total number of items
 * @param {number} props.visibleItems - Number of items visible
 * @param {Object} props.paginationProps - Props for Pagination component
 */
const TableLayout = ({
  children,
  onSearch,
  onFilter,
  searchPlaceholder = "Tìm kiếm",
  showFilter = true,
  showPagination = true,
  totalItems = 0,
  visibleItems = 0,
  paginationProps = {},
  pageSize = 10,
  onchangePageSize,
}) => {
  const handleSearch = (e) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  const handleFilter = () => {
    if (onFilter) {
      onFilter();
    }
  };

  return (
    <div className="shadow bg-background-card rounded-2xl">
      {/* Header Section */}
      <div className="flex items-center justify-between p-5">
        <div className="flex w-full max-w-[250px] items-center gap-3 border-b border-gray-300 p-2">
          <FaSearch className="text-gray-500" />
          <input
            type="search"
            className="w-full border-none outline-none placeholder:text-gray-600"
            placeholder={searchPlaceholder}
            onChange={handleSearch}
          />
        </div>

        {showFilter && (
          <div className="flex">
            <SecondaryButton
              onClick={handleFilter}
              icon={<IoFilterOutline size={22} />}
            >
              Filter
            </SecondaryButton>
          </div>
        )}
      </div>

      {/* Table Content */}
      <div className="w-full">{children}</div>

      {/* Footer Section */}
      <div className="flex items-center justify-between">
        {showPagination && (
          <div className="flex items-center justify-between p-5">
            {/* {totalItems > 0 && (
              <div className="text-sm text-gray-600">
                Hiển thị {visibleItems} trên {totalItems}
              </div>
            )} */}
            <Pagination {...paginationProps} />
          </div>
        )}

        <div>
          <SelectField
            value={pageSize}
            onChange={onchangePageSize}
            placeholder=""
          ></SelectField>
        </div>
      </div>
    </div>
  );
};

export default TableLayout;
