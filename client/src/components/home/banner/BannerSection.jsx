import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import MainBanner from "./MainBanner";
import SubBanner from "./SubBanner";
import { DAILY_DEALS, SUB_BANNERS } from "../../../constants/bannerConstant";

const BannerSection = () => {
  return (
      <div className="grid grid-cols-12 gap-4">
        {/* Banner */}
        <div className="col-span-8">
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}
            className="h-full"
          >
            {DAILY_DEALS.map((deal) => (
              <SwiperSlide key={deal.id}>
                <MainBanner {...deal} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Banner Con */}
        <div className="col-span-4 flex flex-col gap-4">
          {SUB_BANNERS.map((banner) => (
            <SubBanner key={banner.id} {...banner} />
          ))}
        </div>
      </div>
  );
};

export default BannerSection;