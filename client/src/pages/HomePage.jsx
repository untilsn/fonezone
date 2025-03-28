import React from 'react'
import BenefitBarSection from '../components/home/section/BenefitBarSection'
import CouponSection from '../components/home/section/CouponSection'
import BannerSection from '../components/home/banner/BannerSection'
import ProductTabSection from '../components/home/product/ProductTabSection'
import PromoBanner from '../components/home/banner/PromoBanner'
import SignatureProduct from '../components/home/product/SignatureProduct'
import BlogSection from '../components/home/section/BlogSection'


const HomePage = () => {
  return (
    <div className='container py-10 flex flex-col gap-20'>
      <BannerSection></BannerSection>
      <ProductTabSection></ProductTabSection>
      <PromoBanner></PromoBanner> 
      <SignatureProduct></SignatureProduct>  
      <BenefitBarSection></BenefitBarSection>  
      <CouponSection></CouponSection>  
      <BlogSection></BlogSection>
    </div>
  )
}

export default HomePage