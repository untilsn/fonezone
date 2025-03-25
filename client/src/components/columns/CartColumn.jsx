import { IoMdClose } from "react-icons/io";
import QuantitySelector from "../common/QuantitySelector";

export const cartColumns = (handleIncrease, handleDecrease) => [
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
      <div className="w-[120px] mx-auto">
        <QuantitySelector
          quantity={row.original.quantity}
          onIncrease={() => handleIncrease(row.index)}
          onDecrease={() => handleDecrease(row.index)}
        />
      </div>
    ),
  },
  {
    header: "Total",
    accessorKey: "total",
    cell: ({ getValue }) => (
      <div className="w-[120px] mx-auto text-center text-yellow">{`$${getValue().toFixed(2)}`}</div>
    ),
  },
  {
    header: "",
    accessorKey: "actions",
    cell: () => (
      <button className="text-gray-500 text-lg hover:text-dark flex items-center justify-center mx-auto"><IoMdClose /></button>
    ),
  },
];
