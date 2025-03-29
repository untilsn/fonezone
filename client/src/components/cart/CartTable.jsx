import React from "react";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";

const CartTable = () => {
  // Dummy data
  const data = React.useMemo(
    () => [
      {
        img: "https://midas-theme.myshopify.com/cdn/shop/articles/post-4_200x200_crop_center.jpg?v=1566522399",
        product: "Apple Watch Series 3",
        color: "White",
        size: "38mm",
        price: 214.99,
        quantity: 1,
        total: 214.99,
      },
    ],
    []
  );

  // Column definitions
  const columns = React.useMemo(
    () => [
      {
        header: "Product",
        accessorKey: "product",
        cell: ({ row }) => (
          <div className="flex items-center gap-4">
            <img src={row.original.img} alt="Product" className="w-12 h-12" />
            <div>
              <div className="font-medium">{row.original.product}</div>
              <div className="text-sm text-gray-500">
                Color: {row.original.color}, Size: {row.original.size}
              </div>
            </div>
          </div>
        ),
      },
      {
        header: "Price",
        accessorKey: "price",
        cell: ({ getValue }) => `$${getValue().toFixed(2)}`,
      },
      {
        header: "Quantity",
        accessorKey: "quantity",
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <button className="px-2 py-1 border rounded">-</button>
            <span>{row.original.quantity}</span>
            <button className="px-2 py-1 border rounded">+</button>
          </div>
        ),
      },
      {
        header: "Total",
        accessorKey: "total",
        cell: ({ getValue }) => `$${getValue().toFixed(2)}`,
      },
      {
        header: "",
        accessorKey: "actions",
        cell: () => (
          <button className="text-red-500 hover:underline">Remove</button>
        ),
      },
    ],
    []
  );

  // Create table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-4">
      <table className="min-w-full border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-4 text-left text-gray-700">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-4">
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

export default CartTable;
