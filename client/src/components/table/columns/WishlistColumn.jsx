import { IoMdClose } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";

export const wishlistColumns = [
  {
    header: "Product",
    accessorKey: "product",
    cell: ({ row }) => (
      <div className="flex items-center gap-4">
        <img
          src={row.original.img}
          alt="Product"
          className="w-14 h-14 rounded"
        />
        <div className="text-darkPrimary">{row.original.product}</div>
      </div>
    ),
  },
  {
    header: "Price",
    accessorKey: "price",
    cell: ({ getValue }) => `$${getValue().toFixed(2)}`,
  },
  {
    header: "Stock Status",
    accessorKey: "inStock",
    cell: ({ row }) => (
      <span
        className={`${
          row.original.inStock ? "text-green-600" : "text-red-600"
        } font-semibold`}
      >
        {row.original.inStock ? "In Stock" : "Out of Stock"}
      </span>
    ),
  },
  {
    header: "",
    accessorKey: "add",
    cell: () => (
      <div className="flex items-center justify-center">
        <button className="flex items-center justify-center gap-2 text-sm max-w-[200px] bg-transparent text-gray uppercase border border-yellowDark px-3 py-2 w-full hover:bg-yellow-dark hover:text-white transition-colors">
          <MdAddShoppingCart />
          Add to Cart
        </button>
      </div>
    ),
  },
  {
    header: "",
    accessorKey: "remove",
    cell: () => (
      <div className="flex items-center justify-center">
        <button className="text-gray-500 text-xl hover:text-red-500 transition-colors">
          <IoMdClose />
        </button>
      </div>
    ),
  },
];
