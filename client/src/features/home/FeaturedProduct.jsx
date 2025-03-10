import React from 'react'
import { SwiperSlide } from 'swiper/react'
import ProductCard from '../../components/card/ProductCard'
import CustomSwiper from '../../components/swiper/CustomSwiper'

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