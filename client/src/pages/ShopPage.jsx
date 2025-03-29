import React from 'react'
import HeaderPage from '../components/layout/HeaderPage'
import BreadcrumbPage from '../components/layout/BreadcrumbPage'
import ProductFilter from '../components/shop/product/ProductFilter'
import ProductList from '../components/shop/product/ProductList'

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
          <ProductList></ProductList>
        </div>
      </div>
    </div>
  )
}

export default ShopPage