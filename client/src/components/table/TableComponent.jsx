import React from "react";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";

const TableComponent = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-white rounded overflow-hidden">
      <table className="w-full">
        <thead className="border-b">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <th
                  key={header.id}
                  className={`${index === 0 ? "text-left" : "text-center"} px-4 py-3 text-sm text-gray-700 font-medium `}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white text-center">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b hover:bg-gray-50/50 transition-all">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-8  text-gray-600 border-b">
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

export default TableComponent;
