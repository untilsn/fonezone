import React from 'react'
import BannerSection from '../components/banner/BannerSection'
import PromoBanner from '../components/banner/PromoBanner'
import BenefitBar from '../components/ui/BenefitBar'
import CouponForm from '../components/ui/CouponForm'
import BlogSection from '../components/blog/BlogSection'
import SignatureProduct from '../features/home/SignatureProduct'
import HomeTabs from '../features/home/HomeTabs'


const HomePage = () => {
  return (
    <div className='container py-10 flex flex-col gap-20'>
      <BannerSection></BannerSection>
      <HomeTabs></HomeTabs>
      <PromoBanner></PromoBanner> 
      <SignatureProduct></SignatureProduct>  
      <BenefitBar></BenefitBar>  
      <CouponForm></CouponForm>  
      <BlogSection></BlogSection>
    </div>
  )
}

export default HomePage