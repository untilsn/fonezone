import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TableActionButton from "../TableActionButton";
import formatPrice from "../../../utils/formatPrice";

/**
 * Creates column definitions for Product table
 *
 * @param {Function} handleToggleStock - Callback for toggling stock status
 * @returns {Array} Column definitions for the product table
 */
export const ProductColumn = ({ onView, onEdit, onDelete }) => {
  const columnHelper = createColumnHelper();

  return [
    columnHelper.accessor("_id", {
      header: "ID",
      cell: ({ getValue }) => getValue(),
    }),

    // Product column with image and name
    columnHelper.accessor("product", {
      header: "sản phẩm",
      cell: ({ row }) => {
        const { image, name } = row.original;
        return (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 overflow-hidden bg-gray-100 rounded">
              <img
                src={image || "/api/placeholder/40/40"}
                alt={name}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="font-medium">{name}</span>
          </div>
        );
      },
    }),

    // Type column
    columnHelper.accessor("status", {
      header: "loại",
      cell: ({ getValue }) => getValue(),
    }),

    // Stock toggle column
    columnHelper.accessor("quantity", {
      header: "tồn kho",
      cell: ({ getValue }) => {
        console.log(getValue, "stock");
        return (
          <span
            variant="small"
            className={`font-semibold ${
              getValue() > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {getValue() > 0 ? `${getValue()} sp` : "Hết hàng"}
          </span>
        );
      },
    }),

    // Price column
    columnHelper.accessor("price", {
      header: "giá",
      cell: ({ getValue }) => (
        <span className="font-medium text-success">
          {formatPrice(getValue())}
        </span>
      ),
    }),

    columnHelper.accessor("brand", {
      header: "thương hiệu",
      cell: ({ getValue }) => `$${getValue()}`,
    }),

    columnHelper.accessor("brand", {
      header: "thương hiệu",
      cell: ({ getValue }) => `$${getValue()}`,
    }),

    columnHelper.display({
      id: "actions",
      cell: ({ row }) => (
        <div className="">
          <TableActionButton
            onView={() => onView(row.original)}
            onEdit={() => onEdit(row.original)}
            onDelete={() => onDelete(row.original)}
          />
        </div>
      ),
    }),
  ];
};

export default ProductColumn;
