import React from 'react'
import formatPrice from '../../utils/formatPrice'


const Title = ({ children }) => {
    return (
        <h1 className='text-base font-semibold text-darkPrimary mb-5 capitalize py-3 border-b'>{children}</h1>
    )
}


const CartTotal = () => {
    return (
        <div className='border border-dashed border-darkPrimary border-opacity-40 bg-[#F9F9F9] bg-opacity-60 rounded-lg p-8'>
            <Title>cart total</Title>
            <div className='flex items-center justify-between border-b mb-5 py-3'>
                <h1 className='text-base text-darkPrimary'>Subtotal:	</h1>
                <span className='font-semibold text-darkPrimary'>{formatPrice(644.97)}</span>
            </div>
            <div className='flex items-center justify-between mb-10'>
                <h1 className='text-base text-yellowDark'>Total:	</h1>
                <span className='font-semibold text-yellowDark'>{formatPrice(644.97)}</span>
            </div>
          <button className='text-lg rounded-sm capitalize text-light font-semibold w-full p-2 bg-yellow-dark'>Tiến hành thanh toán</button>
        </div>
    )
}

export default CartTotal