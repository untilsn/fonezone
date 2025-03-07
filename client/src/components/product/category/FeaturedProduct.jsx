import React from 'react'
import CustomSwiper from '../../swiper/CustomSwiper'
import { SwiperSlide } from 'swiper/react'
import ProductCard from '../ProductCard'

const FeaturedProduct = () => {
  return (
    <div>
        <CustomSwiper>
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