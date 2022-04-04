import React from 'react'
import './ProductList.css'
import { getSortedProducts, getFilteredProducts } from '../../utils/index'
import { addToWishlist, addToCart } from '../../helpers/index'
import { useProduct } from '../../context/ProductContext'
import { useFilter } from '../../context/FilterContext'
import { useNavigate } from 'react-router-dom'
import { useWishlist } from '../../context/WishlistContext'
import { useCart } from '../../context/CartContext'

const ProductList = () => {
  const navigate = useNavigate()
  const {
    productState: { products, error }
  } = useProduct()
  const { filterState, filterDispatch } = useFilter()
  const {
    cartState: { cart },
    cartDispatch
  } = useCart()
  const {
    wishlistState: { wishlist },
    wishlistDispatch
  } = useWishlist()

  const sortedProducts = getSortedProducts(products, filterState)
  const filteredProducts = getFilteredProducts(sortedProducts, filterState)

  return (
    <div className='productList'>
      <div className='products__listing'>
        {filteredProducts && filteredProducts.length === 0 ? (
          <h1>No product found</h1>
        ) : (
          filteredProducts?.map(product => {
            // const isProductAddedToCart = cart.find(cardProduct => cardProduct._id === product._id)
            const isProductAddedToCart = cart?.find(
              cardProduct => cardProduct._id === product._id
            )
            const isProductAddToWishlist = wishlist?.find(
              wishlistProduct => wishlistProduct._id === product._id
            )

            return (
              <section className='products card' key={product._id}>
                <img
                  src={product.imageSrc}
                  alt='no found'
                  className='product__image cursor-pointer'
                  onClick={() => {
                    navigate(`/products/${_id}`)
                  }}
                />
                <p className='card-title align-center'>{product.title}</p>
                <p className='product__rating '>{product.rating}</p>
                <p className='card-price'>{product.price}</p>
                <div className='product__button'>
                  {cart.length != 0 && isProductAddedToCart ? (
                    <button
                      className='btn btn-danger'
                      onClick={() => navigate('/cart')}
                    >
                      View cart
                    </button>
                  ) : (
                    <button
                      className='btn btn-info'
                      onClick={() => {
                        addToCart(product, cartDispatch)
                      }}
                    >
                      add to cart{' '}
                    </button>
                  )}

                  {/* wishlist  */}
                  {wishlist.length != 0 && isProductAddToWishlist ? (
                    <button
                      className='btn btn-danger'
                      onClick={() => navigate('/wishlist')}
                    >
                      View Wishlist
                    </button>
                  ) : (
                    <button
                      className='btn btn-success'
                      onClick={() => addToWishlist(product, wishlistDispatch)}
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
