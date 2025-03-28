import React, { useMemo, useState } from 'react';
import BreadcrumbPage from '../components/layout/BreadcrumbPage';
import HeaderPage from '../components/layout/HeaderPage';
import CartTotal from '../features/cart/CartTotal';
import TableComponent from '../components/table/TableComponent';
import CartCoupon from '../features/cart/CartCoupon';
import { cartColumns } from '../components/table/columns/CartColumn';

const CartPage = () => {
  const [data, setData] = useState([
    {
      img: "https://cdn.britannica.com/09/241709-050-149181B1/apple-iphone-11-2019.jpg",
      product: "Apple Watch Series 3",
      color: "White",
      size: "38mm",
      price: 214.99,
      quantity: 1,
      total: 214.99,
    },
    {
      img: "https://cdn.britannica.com/09/241709-050-149181B1/apple-iphone-11-2019.jpg",
      product: "Samsung Galaxy Buds",
      color: "Black",
      size: "One Size",
      price: 99.99,
      quantity: 2,
      total: 199.98,
    },
    {
      img: "https://cdn.britannica.com/09/241709-050-149181B1/apple-iphone-11-2019.jpg",
      product: "Samsung Galaxy Buds",
      color: "Black",
      size: "One Size",
      price: 99.99,
      quantity: 2,
      total: 199.98,
    },
    {
      img: "https://cdn.britannica.com/09/241709-050-149181B1/apple-iphone-11-2019.jpg",
      product: "Samsung Galaxy Buds",
      color: "Black",
      size: "One Size",
      price: 99.99,
      quantity: 2,
      total: 199.98,
    },
    {
      img: "https://cdn.britannica.com/09/241709-050-149181B1/apple-iphone-11-2019.jpg",
      product: "Samsung Galaxy Buds",
      color: "Black",
      size: "One Size",
      price: 99.99,
      quantity: 2,
      total: 199.98,
    },
  ]);

  const handleIncrease = (index) => {
    setData((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price }
          : item
      )
    );
  };

  const handleDecrease = (index) => {
    setData((prev) =>
      prev.map((item, i) =>
        i === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1, total: (item.quantity - 1) * item.price }
          : item
      )
    );
  };

  const columns = useMemo(() => cartColumns(handleIncrease, handleDecrease), [handleIncrease, handleDecrease]);

  return (
    <div>
      <HeaderPage />
      <BreadcrumbPage />
      <div className='container py-10'>
        <div className=" grid grid-cols-[1fr_340px] items-start gap-5 mb-10">
          <TableComponent data={data} columns={columns} />
          <CartTotal />
        </div>
        <CartCoupon></CartCoupon>
      </div>
    </div>
  );
};

export default CartPage;
