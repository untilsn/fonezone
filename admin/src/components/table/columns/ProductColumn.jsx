import { IoMdClose } from "react-icons/io";

export const ProductColumn = (handleToggleStock) => [
  {
    header: "Product",
    accessorKey: "product",
    cell: ({ row }) => (
      <div className="flex items-center gap-4">
        <img
          src={row.original.img}
          alt="Product"
          className="object-cover w-12 h-12 rounded-md"
        />
        <div className="font-medium">{row.original.product}</div>
      </div>
    ),
  },
  {
    header: "Type",
    accessorKey: "type",
    cell: ({ getValue }) => <span>{getValue()}</span>,
  },
  {
    header: "Stocks",
    accessorKey: "stock",
    cell: ({ row }) => (
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={row.original.stock}
          onChange={() => handleToggleStock(row.index)}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
      </label>
    ),
  },
  {
    header: "SKU",
    accessorKey: "sku",
  },
  {
    header: "Price",
    accessorKey: "price",
    cell: ({ getValue }) => {
      const value = getValue();
      return value != null ? `$${value.toFixed(2)}` : "N/A";
    },
  },
  {
    header: "Variants",
    accessorKey: "variants",
    cell: ({ getValue }) => <span>{getValue()}</span>,
  },
  {
    header: "",
    accessorKey: "actions",
    cell: () => (
      <button className="flex items-center justify-center mx-auto text-lg text-gray-500 hover:text-dark">
        <IoMdClose />
      </button>
    ),
  },
];
