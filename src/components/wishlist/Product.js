import React from 'react'
import './WishlistProduct.css'
import { useWishlist } from '../../context/WishlistContext'
import { useCart } from '../../context/CartContext'
import { deleteFromWishlist, addToCart } from '../../helpers/index'

const Product = () => {
  const {
    wishlistState: { wishlist },
    wishlistDispatch
  } = useWishlist()
  const { cartDispatch } = useCart()
  return (
    <>
      <div className='products__listing'>
        {wishlist?.length === 0 ? (
          <h1 className='heading text-alignment '>No item save in wishlist</h1>
        ) : (
          wishlist &&
          wishlist.map((product, index) => {
            const {
              _id,
              title,
              rating,
              priceMrp,
              price,
              imageSrc,
              categoryName
            } = product
            return (
              <div key={index}>
                <section className='card card-spacing'>
                  <img src={imageSrc} alt='ws' className='product__image' />
                  <p className='product__name'>{title}</p>
                  <div className='product__rating'>{rating}</div>
                  <span className='product__price'>{price}</span>

                  <div>
                    <button
                      className='buyLater__btn__green buyLater__btn'
                      onClick={() => {
                        deleteFromWishlist(_id, wishlistDispatch)
                        addToCart(product, cartDispatch)
                      }}
                    >
                      Move to Cart
                    </button>
                    <button
                      className='buyLater__btn'
                      onClick={() => {
                        deleteFromWishlist(_id, wishlistDispatch)
                      }}
                    >
                      Remove{' '}
                    </button>
                  </div>
                </section>
              </div>
            )
          })
        )}
        {/* {wishlistState.length && (
          <div>
            <section className='card card-spacing'>
              <img
                src='./images/advantage-book.jpg'
                alt='ws'
                className='product__image'
              />
              <p className='product__name'>Link Ocean</p>
              <div className='product__rating'>5 star</div>
              <span className='product__price'>523</span>

              <div>
                <button className='buyLater__btn__green buyLater__btn'>
                  Move to Cart
                </button>
                <button className='buyLater__btn'>Remove</button>
              </div>
            </section>
          </div>
        )} */}
      </div>
    </>
  )
}

export default Product
