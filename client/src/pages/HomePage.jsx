import React from 'react'
import BannerSection from '../components/banner/BannerSection'
import ProductTabs from '../components/product/ProductTabs'
import PromoBanner from '../components/banner/PromoBanner'


const HomePage = () => {
  return (
    <div className='container py-10 flex flex-col gap-10'>
      <BannerSection></BannerSection>
      <ProductTabs></ProductTabs>
      <PromoBanner></PromoBanner> 
    </div>
  )
}

export default HomePage