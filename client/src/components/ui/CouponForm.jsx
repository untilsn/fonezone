import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const CouponForm = () => {
  return (
    <div>
      <div
        className='p-5 bg-white'
        style={{
          backgroundImage: "url('/banner/coupon_banner.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col gap-3 justify-center items-center bg-white p-10">
          <h1 className="text-3xl text-dark font-medium">Nhận ưu đãi mới nhất</h1>
          <span>và</span>
          <p>Nhập địa chỉ email của bạn để nhận coupon giảm giá</p>
          {/* Input Form */}
          <div

            className="flex items-center rounded-full border border-gray-300 max-w-[400px] w-full overflow-hidden">
            <input
              type="email"
              className="flex-1 px-5 py-3 border-none outline-none text-gray-600"
              placeholder="Enter your Email Address"
            />
            <button className="bg-yellowColor hover:bg-yellowDark transition-all duration-300 w-16 h-12 flex items-center justify-center">
              <FaArrowRightLong className="text-white text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CouponForm