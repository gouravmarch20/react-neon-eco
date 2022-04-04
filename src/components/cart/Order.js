import React from 'react'
import { useCart } from '../../context/CartContext'
import { deleteFromCart, addToCart, addToWishlist } from '../../helpers/index'
import { useWishlist } from '../../context/WishlistContext'

const Order = () => {
  const { cartState, cartDispatch } = useCart()
  const { cart, cartError, totalProductInCart } = cartState
  const { wishlistDispatch } = useWishlist()
  console.log(cart)

  return (
    <div>
      <div className='cart'>
        {cart.length === 0 ? (
          <h1>No product add to cart</h1>
        ) : (
          cart.map((cart, index) => {
            const { _id, imageSrc } = cart
            return (
              <div className='cart__items' key={index}>
                <img src={imageSrc} alt='no imag' className='cart__image' />
                <div className='cart__detail'>
                  <h3>{cart.title}</h3>
                  <h5>{cart.price}</h5>
                </div>
                <div className='cart__input'>
                  <button
                    className='btn btn-info'
                    onClick={() => {
                      decrementProduct(cart)
                    }}
                  >
                    -
                  </button>
                  <button
                    className='btn btn-info'
                    onClick={() => {
                      incrementProduct(cart)
                    }}
                  >
                    +
                  </button>
                </div>
                <div className='cart__action'>
                  <button
                    className='btn-wait'
                    onClick={() => {
                      deleteFromCart(_id, cartDispatch)
                      addToWishlist(cart, wishlistDispatch)
                    }}
                  >
                    Move to wishlist
                  </button>
                  <button
                    onClick={() => {
                      deleteFromCart(_id, cartDispatch)
                    }}
                  >
                    Remove from cart{' '}
                  </button>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Order
