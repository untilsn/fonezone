import React from 'react'
import BreadcrumbPage from '../components/layout/BreadcrumbPage'
import ProductRelative from '../features/product/details/ProductRelative'
import ProductTabs from '../features/product/details/ProductTabs'
import ProductImageSlide from "../features/product/details/ProductImageSlide"
import ProductInfo from '../features/product/details/ProductInfo'
const image = [
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/id/238/200/300",
  "https://picsum.photos/id/239/200/300",
  "https://picsum.photos/id/240/200/300",
  "https://picsum.photos/id/241/200/300"
]





const ProductDetailsPage = () => {
  return (
    <div>
    <BreadcrumbPage></BreadcrumbPage>
    <div className='container my-10'>
        <div className='grid grid-cols-2 gap-10 mb-10'>
            <ProductImageSlide images={image}></ProductImageSlide>
            <ProductInfo></ProductInfo>
        </div>
        <ProductTabs></ProductTabs>
        <ProductRelative></ProductRelative>
    </div>
</div>
  )
}

export default ProductDetailsPage