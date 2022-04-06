import React from 'react'
import { useProduct } from '../../../context/ProductContext'

import { useCart } from '../../../context/CartContext'
import { addToCart } from '../../../helpers/index'
import { useNavigate } from 'react-router-dom'

import './FeatureProduct.css'
const FeatureProduct = () => {
  const navigate = useNavigate()

  const {
    cartState: { cart },
    cartDispatch
  } = useCart()

  const {
    productState: { products }
  } = useProduct()
  let featuredProducts = [...products].filter(
    product => product.featured === true
  )
  return (
    <div className='feature-product'>
      <div className='divider'></div>
      <h1 className='heading'> Feature Product </h1>
      <div className='products__listing'>
        {featuredProducts && featuredProducts.length === 0 ? (
          <h1>No product found</h1>
        ) : (
          featuredProducts?.map(product => {
            const isProductAddedToCart = cart?.find(
              cardProduct => cardProduct._id === product._id
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
                  <button
                    className='btn btn-success'
                    onClick={() => navigate('/products')}
                  >
                    View more
                  </button>
                  {featuredProducts.length != 0 && isProductAddedToCart ? (
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
                      Add to cart
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

export default FeatureProduct
