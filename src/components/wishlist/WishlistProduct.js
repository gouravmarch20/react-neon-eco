import React from 'react'
import './WishlistProduct.css'
import { useWishlist } from '../../context/WishlistContext'
import { useCart } from '../../context/CartContext'
import { deleteFromWishlist, addToCart } from '../../helpers/index'
import { discontInPercent } from '../../utils'
import { useAuth } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import Rating from '@mui/material/Rating'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const WishlistProduct = () => {
  const {
    wishlistState: { wishlist },
    wishlistDispatch
  } = useWishlist()
  const {
    authState: { token, isLoggedIn }
  } = useAuth()
  const {
    cartDispatch,
    cartState: { cart }
  } = useCart()
  const navigate = useNavigate()
  return (
    <>
      {token && isLoggedIn ? (
        <div className=''>
          {wishlist?.length === 0 ? (
            <div>
              <h2 className='heading '>No item save in wishlist</h2>
              <h3 className='subheading'>
                Your saved <span> {wishlist.length} product . </span>
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
            wishlist &&
            wishlist.length > 0 && (
              <>
                <h2 className='   heading'>
                  Your saved <span> {wishlist.length} products . </span>
                </h2>
                <div className='products__listing'>
                  {wishlist.map((product, index) => {
                    const {
                      _id,
                      title,
                      rating,
                      priceMrp,
                      price,
                      imageSrc
                    } = product
                    const isAlreadyAddToCart = cart.find(
                      _cart => _cart._id === _id
                    )
                    return (
                      <div key={index}>
                        <section className='cart__items'>
                          <LazyLoadImage
                            src={imageSrc}
                            className='cart__image cursor-pointer'
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

                          <div>
                            {isAlreadyAddToCart ? (
                              <button
                                className='card-button card-btn-view-more '
                                onClick={() => navigate('/cart')}
                              >
                                View cart
                              </button>
                            ) : (
                              <button
                                className=' card-button card-btn-add-to-cart'
                                onClick={() => {
                                  deleteFromWishlist(
                                    _id,
                                    token,
                                    wishlistDispatch
                                  )
                                  addToCart(product, token, cartDispatch)
                                }}
                              >
                                Move to Cart
                              </button>
                            )}

                            <button
                              className='card-button card-btn-remove '
                              onClick={() => {
                                deleteFromWishlist(_id, token, wishlistDispatch)
                              }}
                            >
                              Remove{' '}
                            </button>
                          </div>
                        </section>
                      </div>
                    )
                  })}{' '}
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

export default WishlistProduct
