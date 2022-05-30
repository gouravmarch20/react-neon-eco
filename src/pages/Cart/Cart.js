import React from 'react'
import OrderProduct from '../../components/cart/OrderProduct'
import Payment from '../../components/cart/Payment'
import './Cart.css'
import { useAuth } from '../../context/AuthContext'
import { useCart } from '../../context/CartContext'

export const Cart = () => {
  const {
    authState: { userInfo, token, isLoggedIn }
  } = useAuth()
  const { cartState, cartDispatch } = useCart()
  const { cart, cartError, totalProductInCart } = cartState

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
