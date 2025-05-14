import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import Pagination from "../commons/Pagination";
import SecondaryButton from "../button/SecondaryButton";
import SelectField from "../form/SelectField";
import SearchField from "../form/SearchField";

/**
 * TableLayout Component - A flexible layout wrapper for tables with configurable controls
 */
const TableLayout = ({
  children,
  // Table control props
  controls = {
    search: true,
    filter: false,
    pageSize: false,
    pagination: true,
  },
  // Table data props
  tableData = {
    totalItems: 0,
    visibleItems: 0,
    currentPage: 1,
    pageSize: 10,
  },
  // Callback handlers
  handlers = {
    onSearch: () => {},
    onFilter: () => {},
    onChangePageSize: () => {},
    onPageChange: () => {},
  },
}) => {
  // Destructure for easier access
  const { search, filter, pageSize, pagination } = controls;
  const { totalItems, visibleItems } = tableData;
  const { onSearch, onFilter, onChangePageSize, onPageChange } = handlers;

  // Handler for search input
  const handleSearch = (e) => onSearch(e.target.value);

  // Page size options
  const pageSizeOptions = [
    { value: "10", label: "10 / trang" },
    { value: "20", label: "20 / trang" },
    { value: "50", label: "50 / trang" },
    { value: "100", label: "100 / trang" },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      {/* Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center flex-grow gap-2">
          {search && (
            <div className="w-full max-w-[300px]">
              <SearchField placeholder="Tìm kiếm..." onChange={handleSearch} />
            </div>
          )}

          {filter && (
            <SecondaryButton
              onClick={onFilter}
              icon={<IoFilterOutline size={18} />}
              className="ml-2"
            >
              Filter
            </SecondaryButton>
          )}
        </div>

        {pageSize && (
          <div className="w-[150px]">
            <SelectField
              options={pageSizeOptions}
              onChange={(e) => onChangePageSize(e.target.value)}
              value={tableData.pageSize.toString()}
            />
          </div>
        )}
      </div>

      {/* Table Content */}
      <div className="mb-4">{children}</div>

      {/* Footer */}
      <div className="flex flex-wrap items-center justify-between mt-4">
        {totalItems > 0 && (
          <div className="text-sm text-gray-500">
            Hiển thị {visibleItems} trên {totalItems}
          </div>
        )}

        {pagination && totalItems > 0 && (
          <Pagination
            currentPage={tableData.currentPage}
            totalItems={totalItems}
            itemsPerPage={tableData.pageSize}
            onPageChange={onPageChange}
          />
        )}
      </div>
    </div>
  );
};

export default TableLayout;
