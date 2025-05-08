// src/components/table/columns/BrandColumn.tsx
import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import TableActionButton from "../TableActionButton";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../constants/paths";
import dayjs from "dayjs";
import ToggleButton from "../../button/ToogleButton";

export const BrandsColumn = ({ onEdit, onDelete, onToggleActive }) => {
  const columnHelper = createColumnHelper();

  return [
    // ID
    columnHelper.accessor("_id", {
      header: "ID",
      cell: ({ getValue }) => {
        const id = getValue();
        return (
          <span className="" title={id}>
            {id}
          </span>
        );
      },
    }),

    // Name
    columnHelper.accessor("name", {
      header: "Tên thương hiệu",
      cell: ({ getValue }) => (
        <span className="font-medium capitalize">{getValue()}</span>
      ),
    }),

    // // Description
    // columnHelper.accessor("description", {
    //   header: "Mô tả",
    //   cell: ({ getValue }) => (
    //     <span className="block max-w-[200px] truncate" title={getValue()}>
    //       {getValue() || "-"}
    //     </span>
    //   ),
    // }),

    // isActive
    columnHelper.accessor("isActive", {
      header: "Kích hoạt",
      cell: ({ row }) => (
        <ToggleButton
          checked={row.original.isActive}
          onChange={() => onToggleActive(row.original)}
        />
      ),
    }),

    // CreatedAt
    columnHelper.accessor("createdAt", {
      header: "Ngày tạo",
      cell: ({ getValue }) => (
        <span className="text-sm text-gray-500">
          {dayjs(getValue()).format("DD/MM/YYYY")}
        </span>
      ),
    }),

    // UpdatedAt
    columnHelper.accessor("updatedAt", {
      header: "Ngày cập nhật",
      cell: ({ getValue }) => (
        <span className="text-sm text-gray-500">
          {dayjs(getValue()).format("DD/MM/YYYY")}
        </span>
      ),
    }),

    // Actions
    columnHelper.accessor("action", {
      header: "thao tác",
      enableSorting: false,
      cell: ({ row }) => (
        <TableActionButton
          onEdit={() => onEdit(row.original)}
          onDelete={() => onDelete(row.original)}
        />
      ),
    }),
  ];
};

export default BrandsColumn;
