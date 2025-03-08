import React, { useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom'; // Nếu sử dụng React Router, nếu không thì điều chỉnh phù hợp
import { useSelector } from 'react-redux'; // Nếu sử dụng Redux để quản lý trạng thái, tùy chọn
import IconButton from '../ui/IconButton';
import { MdAccountCircle, MdFavoriteBorder, MdOutlineAccountCircle, MdOutlineMessage, MdOutlineShoppingBag, MdShoppingBag } from "react-icons/md";

const HeaderAction = () => {
  // Ví dụ: Lấy số lượng sản phẩm trong giỏ hàng từ Redux store hoặc context (nếu áp dụng)
  // const cartCount = useSelector((state) => state.cart.items.length) || 0;

  // Memoize các mục hành động để ngăn re-render không cần thiết
  const actionItems = useMemo(() => [
    { id: 'account', icon: <MdOutlineAccountCircle size={22} />, label: 'account', path: '/account' },
    { id: 'wishlist', icon: <MdFavoriteBorder size={22} />, label: 'yêu thích', path: '/wishlist' },
    { id: 'cart', icon: <MdOutlineShoppingBag size={22} />, label: 'giỏ hàng', path: '/cart', count: 10 },
  ], []); // Chỉ tính toán lại nếu cartCount thay đổi

  // Xử lý sự kiện nhấp chuột một cách hiệu quả với useCallback
  const handleActionClick = useCallback((path) => {
    // Thêm logic điều hướng hoặc khác ở đây (ví dụ: sử dụng React Router)
    console.log(`Đang điều hướng đến ${path}`);
  }, []);

  return (
    <div className="flex items-end justify-end gap-4 w-full" role="navigation" aria-label="Hành động người dùng">
      {actionItems.map((item) => (
        <IconButton
          key={item.id}
          icon={item.icon}
          label={item.label}
          count={item.count}
          onClick={() => handleActionClick(item.path)}
          className="text-white/60 hover:text-white transition-colors duration-200"
          aria-label={`${item.label} ${item.count ? `(${item.count} mục)` : ''}`}
        />
      ))}
    </div>
  );
};

// Memoize toàn bộ component để ngăn re-render không cần thiết
export default React.memo(HeaderAction);