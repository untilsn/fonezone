import React, { useState, useEffect, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

/**
 * Reusable Table Component with built-in sorting, selection and pagination
 *
 * @param {Object} props
 * @param {Array} props.data - Data array to display in table
 * @param {Array} props.columns - Column definitions
 * @param {boolean} props.enableSelection - Enable row selection feature
 * @param {Function} props.onSelectionChange - Callback when selection changes
 * @param {boolean} props.enablePagination - Show pagination controls
 * @param {Object} props.tableOptions - Additional options for react-table
 * @param {string} props.className - Additional CSS classes for table wrapper
 */
const Table = ({
  data = [],
  columns = [],
  enableSelection = true,
  onSelectionChange = null,
  enablePagination = true,
  tableOptions = {},
  className = "",
}) => {
  const [sorting, setSorting] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  // Add selection column if enableSelection is true
  const finalColumns = useMemo(() => {
    if (!enableSelection) return columns;

    return [
      {
        id: "select",
        header: ({ table }) => (
          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              checked={table.getIsAllRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
              className="w-4 h-4 border-gray-300 rounded"
            />
          </div>
        ),
        cell: ({ row }) => (
          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              checked={row.getIsSelected()}
              onChange={row.getToggleSelectedHandler()}
              className="w-4 h-4 border-gray-300 rounded"
            />
          </div>
        ),
      },
      ...columns,
    ];
  }, [columns, enableSelection]);

  // Notify about selection changes if callback provided
  useEffect(() => {
    if (onSelectionChange) {
      const selectedRows = data.filter((_, index) => rowSelection[index]);
      onSelectionChange(selectedRows);
    }
  }, [rowSelection, data, onSelectionChange]);

  // Initialize table instance
  const table = useReactTable({
    data,
    columns: finalColumns,
    state: {
      sorting,
      rowSelection,
      pagination,
    },
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection: enableSelection,
    ...tableOptions,
  });

  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <table className="min-w-full text-sm bg-white border-gray-300 border-y">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="px-4 py-3 font-semibold text-left text-gray-600 capitalize select-none"
                >
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className:
                          header.column.getCanSort() && header.id !== "select"
                            ? "flex items-center gap-1 cursor-pointer select-none"
                            : "",
                        onClick:
                          header.id !== "select"
                            ? header.column.getToggleSortingHandler()
                            : undefined,
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getCanSort() && header.id !== "select" && (
                        <>
                          {{
                            asc: <span>▲</span>,
                            desc: <span>▼</span>,
                          }[header.column.getIsSorted()] ?? (
                            <span className="text-xs text-gray-300">▲▼</span>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-t border-gray-300 hover:bg-gray-100"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls - Only shown if enablePagination is true */}
      {enablePagination && (
        <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-300">
          <div className="flex items-center gap-2">
            <button
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              className="px-2 py-1 text-sm bg-gray-100 rounded disabled:opacity-50"
            >
              <FaAnglesLeft />
            </button>
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="px-2 py-1 text-sm bg-gray-100 rounded disabled:opacity-50"
            >
              <FaAngleLeft />
            </button>
            <span className="text-sm">
              Trang{" "}
              <strong>
                {table.getState().pagination.pageIndex + 1} /{" "}
                {table.getPageCount()}
              </strong>
            </span>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="px-2 py-1 text-sm bg-gray-100 rounded disabled:opacity-50"
            >
              <FaAngleRight />
            </button>
            <button
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
              className="px-2 py-1 text-sm bg-gray-100 rounded disabled:opacity-50"
            >
              <FaAnglesRight />
            </button>
          </div>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="px-2 py-1 text-sm bg-white border border-gray-300 rounded"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Hiển thị {pageSize}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Table;
