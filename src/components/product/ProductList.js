import React from 'react'
import './ProductList.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Rating from '@mui/material/Rating'

import {
  getSortedProducts,
  getFilteredProducts,
  discontInPercent
} from '../../utils/index'
import { addToWishlist, addToCart } from '../../helpers/index'
import { useProduct } from '../../context/ProductContext'
import { useFilter } from '../../context/FilterContext'
import { useNavigate } from 'react-router-dom'
import { useWishlist } from '../../context/WishlistContext'
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'

const ProductList = () => {
  const {
    authState: { token }
  } = useAuth()
  const navigate = useNavigate()
  const {
    productState: { products }
  } = useProduct()
  const { filterState } = useFilter()
  const {
    cartState: { cart },
    cartDispatch
  } = useCart()
  const {
    wishlistState: { wishlist },
    wishlistDispatch
  } = useWishlist()
  const handleAddToCart = product => {
    token ? addToCart(product, token, cartDispatch) : navigate('/signin')
  }
  const handleAddToWishlist = product => {
    token
      ? addToWishlist(product, token, wishlistDispatch)
      : navigate('/signin')
  }
  const sortedProducts = getSortedProducts(products, filterState)
  const filteredProducts = getFilteredProducts(sortedProducts, filterState)

  return (
    <div className='productList'>
      <h1 className='heading mt-1'>
        Total products{' '}
        <span className='subheading'>{filteredProducts.length}</span>
      </h1>
      <div className='products__listing'>
        {filteredProducts && filteredProducts.length === 0 ? (
          <h1 className='heading text-alignment'>No product found</h1>
        ) : (
          filteredProducts?.map(product => {
            const isProductAddedToCart = cart?.find(
              cardProduct => cardProduct._id === product._id
            )
            const isProductAddToWishlist = wishlist?.find(
              wishlistProduct => wishlistProduct._id === product._id
            )

            return (
              <section className='products ' key={product._id}>
                <LazyLoadImage
                  src={product.imageSrc}
                  alt='no found'
                  className='product__image '
                  onClick={() => {
                    navigate(`/products/${product._id}`)
                  }}
                />

                <p className='card-title'>{product.title}</p>
                <p className='card-rating'>
                  <Rating
                    value={product.rating}
                    readOnly={true}
                    precision={0.5}
                  />
                </p>

                <div className='card-pricing-detail'>
                  <span className='card-price'>{product.price} &nbsp; </span>
                  <span className='card-price-mrp'>
                    <del>{product.priceMrp}</del>
                  </span>

                  <span className='card-disount'>
                    &nbsp; {discontInPercent(product.price, product.priceMrp)}%
                  </span>
                </div>
                <div className=''>
                  {cart.length != 0 && isProductAddedToCart ? (
                    <button
                      className='card-button card-btn-add-to-cart '
                      onClick={() => navigate('/cart')}
                    >
                      View cart
                    </button>
                  ) : (
                    <button
                      className='card-button card-btn-add-to-cart'
                      onClick={() => {
                        handleAddToCart(product)
                      }}
                    >
                      add to cart{' '}
                    </button>
                  )}

                  {/* wishlist  */}
                  {wishlist.length != 0 && isProductAddToWishlist ? (
                    <button
                      className='card-button card-btn-add-to-wishlist'
                      onClick={() => navigate('/wishlist')}
                    >
                      View Wishlist
                    </button>
                  ) : (
                    <button
                      className='card-button card-btn-add-to-wishlist'
                      onClick={() => handleAddToWishlist(product)}
                    >
                      add to wishlist{' '}
                    </button>
                  )}
                </div>
              </section>
            )
          })
        )}
      </div>
    </div>
  )
}

export default ProductList
