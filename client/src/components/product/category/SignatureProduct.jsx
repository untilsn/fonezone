import React from 'react'
import CustomSwiper from '../../swiper/CustomSwiper'
import ProductCard from '../ProductCard'
import { SwiperSlide } from 'swiper/react'
import SectionTitle from '../../ui/SectionTitle'

const SignatureProduct = () => {
  return (
    <div>
      <SectionTitle title='Sản Phẩm Đặt Trưng' subTitle='ưu đãi hôm nay và nhiều hơn nữa'></SectionTitle>
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

export default SignatureProduct