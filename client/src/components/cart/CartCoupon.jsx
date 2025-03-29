import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const CartCoupon = () => {
  return (
    <div className='flex items-center gap-5'>
      <input type="text" className='py-3 px-4 max-w-[300px] w-full border outline-none bg-gray-50' placeholder='Coupon code' />
      <button className=' border p-4 text-gray hover:bg-yellow hover:text-white transition-colors'><FaArrowRightLong /></button>
    </div>
  )
}

export default CartCoupon