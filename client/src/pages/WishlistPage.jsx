import React from 'react'
import TableComponent from '../components/table/TableComponent'
import { wishlistColumns } from '../components/table/WishlistColumn';
import BreadcrumbPage from '../components/layout/BreadcrumbPage';


const wishlistData = [
  { id: 1, product: "MacBook Pro", img: 'https://midas-theme.myshopify.com/cdn/shop/articles/post-4_200x200_crop_center.jpg?v=1566522399', category: "Laptop", price: 1999 },
  { id: 2, product: "AirPods Pro", img: 'https://midas-theme.myshopify.com/cdn/shop/articles/post-4_200x200_crop_center.jpg?v=1566522399', category: "Accessories", price: 249 },
];

const WishlistPage = () => {
  return (
    <div>
      <BreadcrumbPage></BreadcrumbPage>
      <div className='container py-10'>
        <TableComponent data={wishlistData} columns={wishlistColumns}></TableComponent>
      </div>
    </div>
  )
}

export default WishlistPage