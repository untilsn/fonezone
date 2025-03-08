import React from 'react'
import HeaderPage from '../components/layout/HeaderPage'
import BreadcrumbPage from '../components/layout/BreadcrumbPage'
import ShopFilter from '../components/shop/ShopFilter'

const ShopPage = () => {
  return (
    <div>
      <HeaderPage></HeaderPage>
      <BreadcrumbPage></BreadcrumbPage>
      <div className='container grid grid-cols-[270px_minmax(0,_1fr)] gap-8 my-10'>
        <ShopFilter></ShopFilter>
        <div className=''>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur necessitatibus eaque ipsam. Aut iure maxime totam culpa, obcaecati, labore deserunt unde asperiores nam nobis ipsa neque suscipit tenetur, vitae minima.
        </div>
      </div>
    </div>
  )
}

export default ShopPage