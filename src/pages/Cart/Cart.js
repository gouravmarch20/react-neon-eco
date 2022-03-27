import React from 'react'
import Order from '../../components/cart/Order'
import Payment from '../../components/cart/Payment'
import  './Cart.css'
export const Cart = () => {
  return (
    <>
      <div className='container'>
        <Order />
        <Payment />
      </div>
    </>
  )
}

