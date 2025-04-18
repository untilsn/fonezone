import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TableActionButton from "../TableActionButton";
import formatPrice from "../../../utils/formatPrice";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../constants/paths";

/**
 * Creates column definitions for Product table
 *
 * @param {Function} handleToggleStock - Callback for toggling stock status
 * @returns {Array} Column definitions for the product table
 */
export const ProductColumn = ({ onView, onEdit, onDelete }) => {
  const columnHelper = createColumnHelper();
  const navigate = useNavigate();

  return [
    columnHelper.accessor("_id", {
      header: "ID",
      enableSorting: false,
      cell: ({ getValue }) => {
        const id = getValue();
        return (
          <span className="truncate max-w-[100px] block" title={id}>
            {id.slice(1, 6)}...{id.slice(-4)}
          </span>
        );
      },
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
      cell: ({ row }) => {
        return (
          <div>
            {row.original.category.map((item) => (
              <div key={item._id}>{item.name}</div>
            ))}
          </div>
        );
      },
    }),

    // Stock toggle column
    columnHelper.accessor("quantity", {
      header: "tồn kho",
      cell: ({ getValue }) => {
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
      cell: ({ row }) => {
        const { brand } = row.original;
        return (
          <div>
            {brand.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        );
      },
    }),

    columnHelper.display({
      id: "actions",
      cell: ({ row }) => {
        console.log(row.original);
        return (
          <div className="">
            <TableActionButton
              onEdit={() =>
                onEdit(navigate(paths.products.edit(row.original.slug)))
              }
              onDelete={() => onDelete(row.original)}
            />
          </div>
        );
      },
    }),
  ];
};

export default ProductColumn;
