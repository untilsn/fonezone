import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

const CustomSwiper = ({
  children,
  slidesPerView = 4,
  spaceBetween = 20,
  navigation = true,
  pagination = false,
  scrollbar = false,
  autoplay = false,
  effect = "slide",
  loop = false,
  breakpoints = null,
  className = "",
  ...props
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      navigation={navigation}
      pagination={pagination}
      scrollbar={scrollbar ? { draggable: true } : false}
      autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
      effect={effect}
      loop={loop}
      breakpoints={
        breakpoints || {
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }
      }
      className={`custom-swiper ${className}`}
      {...props}
    >
      {children}
    </Swiper>
  );
};

export default CustomSwiper;
