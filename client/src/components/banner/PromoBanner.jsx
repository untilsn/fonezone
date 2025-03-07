import React from "react";
import promoBannerImage from '/banner/promo_banner.jpg';
import { Button } from "@material-tailwind/react";

const PromoBanner = () => {
  return (
    <div
      className="w-full h-full p-5 bg-cover bg-center"
      style={{ backgroundImage: `url(${promoBannerImage})` }}
    >
      <div className="bg-white p-5 flex items-center gap-10 h-[140px]">
        <div className="text-2xl font-semibold text-end">
          <span className="text-yellowColor">Ưu Đãi Mới</span>
          <div className="text-darkPrimary">Bắt đầu hàng ngày lúc 12 giờ</div>
        </div>
        <div className="text-sm text-gray max-w-[440px] font-medium leading-7">
          <p>
            Nhận <span className="text-darkPrimary">MIỄN PHÍ VẬN CHUYỂN* & 5%</span> phần thưởng trên mỗi đơn hàng với chương trình phần thưởng của Molla Theme
          </p>
        </div>
        {/* Chỉnh sửa phần tử chứa button để căn giữa */}
        <div className="flex-1 flex justify-center items-center">
          <Button className="rounded-full max-w-[250px]">
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
