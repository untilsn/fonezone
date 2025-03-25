export const orderColumns = [
  {
    header: "Mã Đơn Hàng",
    accessorKey: "orderId",
    cell: (info) => <span className="text-indigo-500 font-semibold">{info.getValue()}</span>,
  },
  {
    header: "Ngày Đặt",
    accessorKey: "date",
    cell: (info) => <span className="text-gray-600">{info.getValue()}</span>,
  },
  {
    header: "Tổng Tiền",
    accessorKey: "total",
    cell: (info) => <span className="text-green-500 font-medium">{info.getValue()} VND</span>,
  },
  {
    header: "Trạng Thái",
    accessorKey: "status",
    cell: (info) => {
      const status = info.getValue();
      let color = "bg-yellow-400";
      if (status === "Hoàn thành") color = "bg-green-500";
      if (status === "Đang xử lý") color = "bg-blue-500";
      if (status === "Hủy") color = "bg-red-500";

      return (
        <span className={`text-white text-xs px-3 py-1 rounded-full ${color}`}>
          {status}
        </span>
      );
    },
  },
];
