import React from 'react'
import HeaderPage from '../components/layout/HeaderPage'
import BreadcrumbPage from '../components/layout/BreadcrumbPage'
import ProductGrid from '../features/shop/ProductGrid'
import ProductFilter from '../features/shop/ProductFilter'

const ShopPage = () => {
  return (
    <div>
      <HeaderPage></HeaderPage>
      <BreadcrumbPage></BreadcrumbPage>
      <div className='container grid-layout'>
        {/* <ProductFilter></ProductFilter> */}
        <div className='col-span-3'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus repellat voluptas architecto laudantium doloribus natus ut quas nesciunt eius animi, est sunt praesentium laborum ipsa beatae veniam, velit ullam? Incidunt.
        </div>
        <div className='col-span-9'>
          <ProductGrid></ProductGrid>
        </div>
      </div>
    </div>
  )
}

export default ShopPage