import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import LoadingTableSkeleton from "../commons/LoadingTableSkeleton";
import ErrorState from "../commons/ErrorState";
import EmptyState from "../commons/EmptyState";

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
  tableOptions = {},
  isLoading = false,
  isError = false,
  rowSelection,
  onRowSelectionChange,
  emptyMessage = "No data found",
  className = "",
}) => {
  const [sorting, setSorting] = useState([]);

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
              className="h-4 w-4 rounded border-gray-300"
            />
          </div>
        ),
        cell: ({ row }) => (
          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              checked={row.getIsSelected()}
              onChange={row.getToggleSelectedHandler()}
              className="h-4 w-4 rounded border-gray-300"
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
    },
    onSortingChange: setSorting,
    onRowSelectionChange,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableRowSelection: enableSelection,
    ...tableOptions,
  });

  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <table className="min-w-full border-y border-gray-300 bg-white text-sm">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="px-4 py-3 text-left font-semibold text-gray-600 capitalize select-none"
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
                        header.getContext(),
                      )}
                      {header.column.getCanSort() && header.id !== "select" && (
                        <div className="flex flex-col justify-center text-[14px] transition-all">
                          <span
                            className={clsx(
                              "-mb-1",
                              header.column.getIsSorted() === "asc"
                                ? "text-primary-active"
                                : "text-gray-300",
                            )}
                          >
                            <FaCaretUp />
                          </span>
                          <span
                            className={clsx(
                              "-mt-1",
                              header.column.getIsSorted() === "desc"
                                ? "text-primary-active"
                                : "text-gray-300",
                            )}
                          >
                            <FaCaretDown />
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {isLoading ? (
            // Hiển thị 10 hàng skeleton
            <LoadingTableSkeleton
              rows={data.length || 10}
              columnCount={table.getAllLeafColumns().length}
            />
          ) : isError ? (
            <tr>
              <td colSpan={table.getAllColumns().length}>
                <ErrorState />
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={table.getAllColumns().length}>
                <EmptyState />
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
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
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
