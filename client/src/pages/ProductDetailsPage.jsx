import React from 'react'
import BreadcrumbPage from '../components/layout/BreadcrumbPage'
import ProductImageSlide from '../components/product-details/gallery/ProductImageSlide'
import ProductInfo from '../components/product-details/info/ProductInfo'
import ProductTabs from '../components/product-details/tab/ProductTabs'
import ProductRelative from '../components/product-details/tab/ProductRelative'

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