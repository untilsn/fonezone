import React, { useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { IoMdClose } from 'react-icons/io';
import { MdAddShoppingCart } from 'react-icons/md';
import BreadcrumbPage from '../components/layout/BreadcrumbPage';

const WishlistPage = () => {
  const data = useMemo(
    () => [
      {
        img: 'https://midas-theme.myshopify.com/cdn/shop/articles/post-4_200x200_crop_center.jpg?v=1566522399',
        product: 'Apple Watch Series 3',
        color: 'White',
        size: '38mm',
        price: 214.99,
        quantity: 1,
        total: 214.99,
        inStock: true,
      },
      {
        img: 'https://midas-theme.myshopify.com/cdn/shop/articles/post-4_200x200_crop_center.jpg?v=1566522399',
        product: 'Apple Watch Series 3',
        color: 'White',
        size: '38mm',
        price: 214.99,
        quantity: 1,
        total: 214.99,
        inStock: true,
      },
      {
        img: 'https://midas-theme.myshopify.com/cdn/shop/articles/post-4_200x200_crop_center.jpg?v=1566522399',
        product: 'Apple Watch Series 3',
        color: 'White',
        size: '38mm',
        price: 214.99,
        quantity: 1,
        total: 214.99,
        inStock: true,
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        header: 'Product',
        accessorKey: 'product',
        cell: ({ row }) => (
          <div className="flex items-center gap-4">
            <img src={row.original.img} alt="Product" className="w-14 h-14 rounded" />
            <div className='text-darkPrimary'>{row.original.product}</div>
          </div>
        ),
      },
      {
        header: 'Price',
        accessorKey: 'price',
        cell: ({ getValue }) => `$${getValue().toFixed(2)}`,
      },
      {
        header: 'Stock Status',
        accessorKey: 'inStock',
        cell: ({ row }) => (
          <span className={row.original.inStock ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
            {row.original.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        ),
      },
      {
        header: '',
        accessorKey: 'add',
        cell: () => (
          <div className='flex items-center justify-center'>
            <button className="flex items-center justify-center gap-2 text-sm max-w-[200px] bg-transparent text-yellowDark uppercase border border-yellowDark px-3 py-2 w-full">
              <MdAddShoppingCart />
              Add to Cart
            </button>
          </div>
        ),
      },
      {
        header: '',
        accessorKey: 'remove',
        cell: () => (
          <div className='flex items-center justify-center'>
            <button className="text-gray-500 hover:text-red-500">
              <IoMdClose size={18} />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <BreadcrumbPage />
      <div className="container mx-auto py-10">
        <div className="bg-white rounded">
          <table className="w-full border border-gray-200 rounded overflow-hidden">
            <thead className="border-b">
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id} className="px-4 py-3 text-sm text-left text-gray-700 font-medium">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="bg-white">
              {table.getRowModel().rows.map(row => (
                <tr key={row.id} className="border-b hover:bg-gray-50">
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id} className="px-4 py-8 text-gray-600 border-b">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
