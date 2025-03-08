import React from 'react'
import BannerSection from '../components/banner/BannerSection'
import ProductTabs from '../components/product/ProductTabs'
import PromoBanner from '../components/banner/PromoBanner'
import SignatureProduct from '../components/product/category/SignatureProduct'
import BenefitBar from '../components/ui/BenefitBar'
import CouponForm from '../components/ui/CouponForm'
import BlogSection from '../components/blog/BlogSection'


const HomePage = () => {
  return (
    <div className='container py-10 flex flex-col gap-20'>
      <BannerSection></BannerSection>
      <ProductTabs></ProductTabs>
      <PromoBanner></PromoBanner> 
      <SignatureProduct></SignatureProduct>  
      <BenefitBar></BenefitBar>  
      <CouponForm></CouponForm>  
      <BlogSection></BlogSection>
    </div>
  )
}

export default HomePage