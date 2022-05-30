import React from 'react'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { discontInPercent } from '../../utils'
import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import './css/order.css'
import {
  deleteFromCart,
  addToWishlist,
  updateQuantity
} from '../../helpers/index'
const Order = () => {
  const {
    authState: { userInfo, token, isLoggedIn }
  } = useAuth()
  const { cartState, cartDispatch } = useCart()
  const { cart, cartError, totalProductInCart } = cartState
  const { wishlistDispatch } = useWishlist()

  return (
    <>
      {token && isLoggedIn ? (
        <div className=' margin-left-auto'>
          {cart.length === 0 ? (
            <div>
              <h2 className='heading'>No product add to cart</h2>
              <h3 className='   subheading'>
                Your saved <span> {cart.length} product . </span>
              </h3>
            </div>
          ) : (
            cart.length > 0 && (
              <>
                <h2 className='   heading'>
                  Your saved <span> {cart.length} products . </span>
                </h2>
                <div className='products__listing '>
                  {cart?.map((cart, index) => {
                    const {
                      _id,
                      imageSrc,
                      title,
                      rating,
                      price,
                      priceMrp
                    } = cart
                    return (
                      <div className='cart__items' key={index}>
                        <img
                          src={imageSrc}
                          alt='no imag'
                          className='cart__image cursor-pointer-none'
                        />

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
                            className='card-button'
                            onClick={() => {
                              cart.qty < 2
                                ? ''
                                : updateQuantity(_id, 'decrement', cartDispatch)
                            }}
                          >
                            -
                          </button>
                          <p className='card-quantity'>{cart.qty}</p>
                          <button
                            className='card-button'
                            onClick={() => {
                              updateQuantity(_id, 'increment', cartDispatch)
                            }}
                          >
                            +
                          </button>
                        </div>
                        <div className=''>
                          <button
                            className='card-button card-btn-add-to-wishlist'
                            onClick={() => {
                              deleteFromCart(_id, cartDispatch)
                              addToWishlist(cart, wishlistDispatch)
                            }}
                          >
                            Move to wishlist
                          </button>
                          <button
                            className='card-button card-btn-remove'
                            onClick={() => {
                              deleteFromCart(_id, cartDispatch)
                            }}
                          >
                            Remove{' '}
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </>
            )
          )}
        </div>
      ) : (
        <div className='auth-login'>
          <h2 className='login-message-heading4'>Please login first </h2>
          <br />
          <div className='login-cta'>
            <Link to='/signin'>
              <button className='ctn-btn'>Login Now</button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Order
