import React from 'react'
import HeaderCart from '../../components/cart/HeaderCart'
import Order from '../../components/cart/Order'
import Payment from '../../components/cart/Payment'
import './Cart.css'
export const Cart = () => {
  return (
    <>
      <div>
        <HeaderCart />
        <div className='container'>
          <Order />

          <Payment />
        </div>
      </div>
    </>
  )
}
