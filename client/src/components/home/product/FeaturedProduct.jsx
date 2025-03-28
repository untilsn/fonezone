import React from 'react'
import { SwiperSlide } from 'swiper/react'
import CustomSwiper from '../../swiper/CustomSwiper'
import ProductCard from '../../shop/product/ProductCard'

const FeaturedProduct = () => {
  return (
    <div>
      <CustomSwiper >
        {Array(6).fill(0).map((_, index) => (
          <SwiperSlide key={index}>
            <ProductCard />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </div>
  )
}

export default FeaturedProduct