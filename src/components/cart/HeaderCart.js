import React from 'react'
import { useCart } from '../../context/CartContext'

const HeaderCart = () => {
  const {
    cartState: { cart }
  } = useCart()

  return (
    <div>
      <h2 className='heading mt-1'>
        Your saved <span> {cart.length} products . </span>
      </h2>
    </div>
  )
}

export default HeaderCart
