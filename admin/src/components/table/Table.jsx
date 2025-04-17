import React, { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

const Table = ({ data }) => {
  const [sorting, setSorting] = useState([]);
  const [rowSelection, setRowSelection] = useState({});

  // Log selected rows whenever selection changes
  useEffect(() => {
    const selectedRows = data.filter((_, index) => rowSelection[index]);
    console.log("Selected products:", selectedRows);
  }, [rowSelection, data]);

  const columnHelper = createColumnHelper();

  const columns = [
    // Selection column
    columnHelper.display({
      id: "select",
      header: ({ table }) => (
        <div className="px-1">
          <input
            type="checkbox"
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
            className="w-4 h-4 border-gray-300 rounded"
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="px-1">
          <input
            type="checkbox"
            checked={row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
            className="w-4 h-4 border-gray-300 rounded"
          />
        </div>
      ),
    }),
    // Product column with image and name
    columnHelper.accessor("product", {
      header: "PRODUCT",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 overflow-hidden bg-gray-100 rounded">
            <img
              src={row.original.image || "/api/placeholder/40/40"}
              alt={row.original.product}
              className="object-cover w-full h-full"
            />
          </div>
          <span>{row.original.product}</span>
        </div>
      ),
    }),
    // Other columns
    columnHelper.accessor("type", {
      header: "TYPE",
    }),
    columnHelper.accessor("stocks", {
      header: "STOCKS",
      cell: ({ row }) => (
        <div className="flex items-center">
          <div
            className={`w-8 h-4 rounded-full ${
              row.original.stocks ? "bg-blue-500" : "bg-gray-200"
            }`}
          >
            <div
              className={`h-4 w-4 rounded-full bg-white transform transition-transform ${
                row.original.stocks ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </div>
        </div>
      ),
    }),
    columnHelper.accessor("sku", {
      header: "SKU",
    }),
    columnHelper.accessor("price", {
      header: "PRICE",
      cell: ({ getValue }) => `$${getValue()}`,
    }),
    columnHelper.accessor("variants", {
      header: "VARIANTS",
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      rowSelection,
    },
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection: true,
  });

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full text-sm bg-white border-gray-300 border-y">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="px-4 py-2 font-semibold text-left text-gray-600 select-none"
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
                <td key={cell.id} className="px-4 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
