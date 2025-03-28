import React from 'react'
import HeaderPage from '../components/layout/HeaderPage'
import BreadcrumbPage from '../components/layout/BreadcrumbPage'
import ProductFilter from '../features/shop/ProductFilter'

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
          {/* <ProductGrid></ProductGrid> */}
        </div>
      </div>
    </div>
  )
}

export default ShopPage