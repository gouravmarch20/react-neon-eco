import React from 'react'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { deleteFromCart, addToCart, addToWishlist ,updateQuantity} from '../../helpers/index'
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
            const { _id, imageSrc } = cart
            return (
              <div className='cart__items' key={index}>
                <img src={imageSrc} alt='no imag' className='cart__image' />
                <div className='cart__detail'>
                  <h3 className='text-info  mt-1'>{cart.title}</h3>
                  <span className='card-price mt-'>
                    {cart.price} &#160;
                    <del className='text-danger'>{cart.priceMrp}</del>
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
                  <p>{cart.qty}</p>
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
    </>
  )
}

export default Order
