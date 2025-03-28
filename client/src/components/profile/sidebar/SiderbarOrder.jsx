import React from 'react'
import TableComponent from '../../table/TableComponent';
import { orderColumns } from '@tanstack/react-table';

export const dummyOrders = [
  { orderId: "#123456", date: "2024-03-10", total: "1.500.000", status: "Hoàn thành" },
  { orderId: "#123457", date: "2024-03-12", total: "2.000.000", status: "Đang xử lý" },
  { orderId: "#123458", date: "2024-03-14", total: "3.250.000", status: "Hủy" },
  { orderId: "#123459", date: "2024-03-15", total: "5.000.000", status: "Hoàn thành" },
];



const SiderbarOrder = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-full">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Danh Sách Đơn Hàng</h2>
      <TableComponent data={dummyOrders} columns={orderColumns} />
    </div>
  )
}

export default SiderbarOrder