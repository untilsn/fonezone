import { createColumnHelper } from "@tanstack/react-table";
import { IoMdClose } from "react-icons/io";

const columnHelper = createColumnHelper();

export const reviewColumns = [
  columnHelper.accessor("product", {
    header: "Sản phẩm",
    cell: ({ row }) => (
      <div className="flex items-center gap-4">
        <img
          src={row.original.img}  
          alt="Product"
          className="w-14 h-14 rounded object-cover"
        />
        <div className="text-darkPrimary font-medium">{row.original.product}</div>
      </div>
    ),
  }),
  columnHelper.accessor("rating", {
    header: "Đánh Giá",
    cell: ({ getValue }) => (
      <span className="text-yellow-500 font-semibold flex items-center">
        {"⭐".repeat(getValue())} ({getValue()})
      </span>
    ),
  }),
  columnHelper.accessor("comment", {
    header: "Bình Luận",
    cell: ({ getValue }) => (
      <span className="text-gray-700">{getValue()}</span>
    ),
  }),
  columnHelper.accessor("date", {
    header: "Ngày Đánh Giá",
    cell: ({ getValue }) => (
      <span className="text-gray-600">{new Date(getValue()).toLocaleDateString("vi-VN")}</span>
    ),
  }),
  columnHelper.display({
    id: "actions",
    header: "Hành Động",
    cell: () => (
      <div className="flex items-center justify-center">
        <button className="text-gray-500 text-xl hover:text-red-500 transition-colors">
          <IoMdClose />
        </button>
      </div>
    ),
  }),
];
