import React from 'react'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { discontInPercent } from '../../utils'

import {
  deleteFromCart,
  addToWishlist,
  updateQuantity
} from '../../helpers/index'
const Order = () => {
  const { cartState, cartDispatch } = useCart()
  const { cart, cartError, totalProductInCart } = cartState
  const { wishlistDispatch } = useWishlist()

  return (
    <>
      <div className='cart'>
        {cart.length === 0 ? (
          <h1 className='heading text-alignment '>No product add to cart</h1>
        ) : (
          cart.length > 0 &&
          cart?.map((cart, index) => {
            const { _id, imageSrc, title, rating, price, priceMrp } = cart
            return (
              <div className='cart__items' key={index}>
                <img src={imageSrc} alt='no imag' className='cart__image' />

                <p className='card-title'>{title}</p>
                <p className='card-rating'>{rating}</p>

                <div className='card-pricing-detail'>
                  <span className='card-price'>{price} &nbsp; </span>
                  <span className='card-price-mrp'>
                    <del>{priceMrp}</del>
                  </span>

                  <span className='card-disount'>
                    &nbsp; {discontInPercent(price, priceMrp)}%
                  </span>
                </div>

                <div className='cart__input'>
                  <button
                    className='btn btn-info'
                    onClick={() => {
                      cart.qty < 2
                        ? ''
                        : updateQuantity(_id, 'decrement', cartDispatch)
                    }}
                  >
                    -
                  </button>
                  <p className='card-rating'>{cart.qty}</p>
                  <button
                    className='btn btn-info'
                    onClick={() => {
                      updateQuantity(_id, 'increment', cartDispatch)
                    }}
                  >
                    +
                  </button>
                </div>
                <div className='cart__action'>
                  <button
                    className='buyLater__btn__green  buyLater__btn'
                    onClick={() => {
                      deleteFromCart(_id, cartDispatch)
                      addToWishlist(cart, wishlistDispatch)
                    }}
                  >
                    Move to wishlist
                  </button>
                  <button
                    className='buyLater__btn'
                    onClick={() => {
                      deleteFromCart(_id, cartDispatch)
                    }}
                  >
                    Remove{' '}
                  </button>
                </div>
              </div>
            )
          })
        )}
      </div>
    </>
  )
}

export default Order
