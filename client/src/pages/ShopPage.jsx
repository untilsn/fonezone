import React from 'react'
import HeaderPage from '../components/layout/HeaderPage'
import BreadcrumbPage from '../components/layout/BreadcrumbPage'
import ProductFilter from '../components/shop/product/ProductFilter'
import ProductList from '../components/shop/product/ProductList'

const fakeProducts = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: 12000000,
    rating: 4.5,
    createdAt: "2025-03-30",
    view: 350,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 11000000,
    rating: 4.0,
    createdAt: "2025-03-29",
    view: 300,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Xiaomi Mi 13",
    price: 8000000,
    rating: 4.2,
    createdAt: "2025-03-28",
    view: 250,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "OnePlus 11",
    price: 10000000,
    rating: 4.3,
    createdAt: "2025-03-27",
    view: 200,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Google Pixel 7",
    price: 9500000,
    rating: 4.4,
    createdAt: "2025-03-26",
    view: 180,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Google Pixel 7",
    price: 9500000,
    rating: 4.4,
    createdAt: "2025-03-26",
    view: 180,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Google Pixel 7",
    price: 9500000,
    rating: 4.4,
    createdAt: "2025-03-26",
    view: 180,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Google Pixel 7",
    price: 9500000,
    rating: 4.4,
    createdAt: "2025-03-26",
    view: 180,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "Google Pixel 7",
    price: 9500000,
    rating: 4.4,
    createdAt: "2025-03-26",
    view: 180,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Google Pixel 7",
    price: 9500000,
    rating: 4.4,
    createdAt: "2025-03-26",
    view: 180,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 11,
    name: "Google Pixel 7",
    price: 9500000,
    rating: 4.4,
    createdAt: "2025-03-26",
    view: 180,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    name: "Google Pixel 7",
    price: 9500000,
    rating: 4.4,
    createdAt: "2025-03-26",
    view: 180,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 13,
    name: "Google Pixel 7",
    price: 9500000,
    rating: 4.4,
    createdAt: "2025-03-26",
    view: 180,
    image: "https://via.placeholder.com/150",
  },
];




const ShopPage = () => {

  return (
    <div>
      <HeaderPage></HeaderPage>
      <BreadcrumbPage></BreadcrumbPage>
      <div className='container grid-layout'>
        <div className='col-span-3'>
          <ProductFilter></ProductFilter>
        </div>
        <div className='col-span-9'>
          <ProductList products={fakeProducts}></ProductList>
        </div>
      </div>
    </div>
  )
}

export default ShopPage