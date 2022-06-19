import React from 'react'
import OrderProduct from '../../components/cart/OrderProduct'
import Payment from '../../components/cart/Payment'
import './Cart.css'
import { useAuth } from '../../context/AuthContext'
import { useCart } from '../../context/CartContext'

export const Cart = () => {
  const {
    authState: { token }
  } = useAuth()
  const { cartState } = useCart()
  const { cart } = cartState
  console.log(cart)
  return (
    <>
      <div>
        <div className='container'>
          <OrderProduct />

          {token && cart.length && <Payment />}
        </div>
      </div>
    </>
  )
}
