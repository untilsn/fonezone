import React from 'react'
import { createColumnHelper } from "@tanstack/react-table";
import TableComponent from '../../table/TableComponent';
import { reviewColumns } from '../../table/columns/ReviewColumn';

export const reviews = [
  {
    id: "1",
    product: "iPhone 15 Pro Max",
    rating: 5,
    comment: "Sản phẩm rất tốt, hiệu năng mạnh mẽ!",
    date: "2024-03-18",
  },
  {
    id: "2",
    product: "Samsung Galaxy S24 Ultra",
    rating: 4,
    comment: "Camera đẹp nhưng pin hơi yếu.",
    date: "2024-03-16",
  },
  {
    id: "3",
    product: "Xiaomi 14 Pro",
    rating: 5,
    comment: "Quá ngon trong tầm giá!",
    date: "2024-03-15",
  },
  {
    id: "4",
    product: "MacBook Pro M3",
    rating: 3,
    comment: "Hiệu năng mạnh nhưng hơi nóng.",
    date: "2024-03-10",
  },
];




const SidebarReview = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-lg font-semibold mb-4">Danh sách đánh giá</h2>
      <TableComponent data={reviews} columns={reviewColumns} />
    </div>
  )
}

export default SidebarReview