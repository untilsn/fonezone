import React from 'react'
import { SwiperSlide } from 'swiper/react'
import CustomSwiper from '../../../components/swiper/CustomSwiper';
import ProductCard from './ProductCard';


const ProductRelative = () => {
    const products = Array.from({ length: 5 });

    return (
        <div>
            <div className='mb-10'>
                <h1 className='text-lg font-semibold py-4 capitalize text-darkPrimary'>sản phẩm bạn quan tâm</h1>
                <div className='h-[1px] w-full bg-gray-200'></div>
            </div>
            <div className='mb-20'>
                <CustomSwiper>
                    {products.map((_, index) => (
                        <SwiperSlide key={index}>
                            <ProductCard />
                        </SwiperSlide>
                    ))}
                </CustomSwiper>
            </div>
        </div>
    )
}

export default ProductRelative