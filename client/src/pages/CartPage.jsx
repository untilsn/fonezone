import React from 'react'
import BreadcrumbPage from '../components/layout/BreadcrumbPage'
import HeaderPage from '../components/layout/HeaderPage'
import CartTable from '../features/cart/CartTable'
import CartTotal from '../features/cart/CartTotal'

const CartPage = () => {
  return (
    <div className='py-10'>
      <HeaderPage></HeaderPage>
      <BreadcrumbPage></BreadcrumbPage>
      <div className='container grid grid-cols-[1fr_340px] items-start gap-5 mb-20'>
        <CartTable></CartTable>
        <CartTotal></CartTotal>
      </div>
    </div>

  )
}

export default CartPage