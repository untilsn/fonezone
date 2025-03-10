import React from 'react'
import HeaderPage from '../components/layout/HeaderPage'
import BreadcrumbPage from '../components/layout/BreadcrumbPage'
import ProductGrid from '../features/shop/ProductGrid'

const ShopPage = () => {
  return (
    <div>
      <HeaderPage></HeaderPage>
      <BreadcrumbPage></BreadcrumbPage>
      <div className='container grid grid-cols-[270px_minmax(0,_1fr)] gap-8 my-10'>
        {/* <ShopFilter></ShopFilter> */}
        <div>
          shopfilter
        </div>
        <ProductGrid></ProductGrid>
      </div>
    </div>
  )
}

export default ShopPage