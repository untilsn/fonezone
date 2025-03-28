import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { VscRefresh } from "react-icons/vsc";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";


export const CouponIconList = [
  {
    id: 1,
    title: "Miễn phí vận chuyển",
    desc: "Đơn hàng 5.000.000đ trở lên",
    icon: <MdLocalShipping />,
  },
  {
    id: 2,
    title: "Trả lại miễn phí",
    desc: "Trong vòng 30 ngày",
    icon: <VscRefresh />,
  },
  {
    id: 3,
    title: "Sẵn sàng hỗ trợ",
    desc: "Liên hệ với chúng tôi",
    icon: <BiSupport />,
  },
  {
    id: 4,
    title: "An toàn thanh toán",
    desc: "Cổng thanh toán uy tín",
    icon: <RiSecurePaymentFill />,
  },
];



const BenefitBarSection = () => {
  return (
    <div className='border-t border-gray/20 pt-20'>
      {/* <div className='w-full h-[1px]  bg-gray/20  my-10'></div> */}
      <div className='flex items-center justify-between '>
        {CouponIconList.map((item) => (
          <div key={item.id} className='flex items-center gap-5'>
            <div className=' text-yellow-dark text-[45px]'>
              {item.icon}
            </div>
            <div>
              <h1 className='text-base text-dark font-semibold capitalize'>{item.title}</h1>
              <h2 className='text-sm text-gray'>{item.desc}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BenefitBarSection