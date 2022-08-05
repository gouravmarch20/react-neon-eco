import React from 'react'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { discontInPercent } from '../../utils'
import { useAuth } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import './css/order.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Rating from '@mui/material/Rating'

import {
  deleteFromCart,
  addToWishlist,
  updateQuantity
} from '../../helpers/index'
const OrderProduct = () => {
  const {
    authState: { token, isLoggedIn }
  } = useAuth()
  const { cartState, cartDispatch } = useCart()
  const { cart, cartError, totalProductInCart } = cartState
  const {
    wishlistDispatch,
    wishlistState: { wishlist }
  } = useWishlist()
  const navigate = useNavigate()

  return (
    <>
      {token && isLoggedIn ? (
        <div className=' margin-left-auto'>
          {cart.length === 0 ? (
            <div>
              <h2 className='heading'>No product add to cart</h2>
              <h3 className='   subheading'>
                Your saved <span> {cart.length} product </span>
              </h3>

              <div className='login-cta'>
                <button
                  className='ctn-btn'
                  onClick={() => navigate('/products')}
                >
                  Shop Now
                </button>
              </div>
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

                    const isAlreadyAddedToWishlist = wishlist.find(
                      _wishlist => _wishlist._id === _id
                    )
                    return (
                      <div className='cart__items' key={index}>
                        <LazyLoadImage
                          src={imageSrc}
                          alt=''
                          className='cart__image cursor-pointer '
                          onClick={() => {
                            navigate(`/products/${_id}`)
                          }}
                        />

                        <p className='card-title'>{title}</p>
                        <p className='card-rating'>
                          <Rating
                            value={rating}
                            readOnly={true}
                            precision={0.5}
                          />
                        </p>

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
                            className={`btn btn-danger  ${
                              cart.qty < 2 ? 'btn-disable' : ''
                            }`}
                            onClick={() => {
                              cart.qty < 2
                                ? ''
                                : updateQuantity(
                                    _id,
                                    token,
                                    'decrement',
                                    cartDispatch
                                  )
                            }}
                          >
                            -
                          </button>
                          <p className='card-quantity'>{cart.qty}</p>
                          <button
                            className='btn btn-info'
                            onClick={() => {
                              updateQuantity(
                                _id,
                                token,
                                'increment',
                                cartDispatch
                              )
                            }}
                          >
                            +
                          </button>
                        </div>
                        <div className=''>
                          {isAlreadyAddedToWishlist ? (
                            <button
                              className='card-button card-btn-view-more '
                              onClick={() => navigate('/wishlist')}
                            >
                              View Wishlist
                            </button>
                          ) : (
                            <button
                              className='card-button card-btn-add-to-wishlist'
                              onClick={() => {
                                deleteFromCart(_id, token, cartDispatch)
                                addToWishlist(cart, token, wishlistDispatch)
                              }}
                            >
                              Move to wishlist
                            </button>
                          )}

                          <button
                            className='card-button card-btn-remove'
                            onClick={() => {
                              deleteFromCart(_id, token, cartDispatch)
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

export default OrderProduct
