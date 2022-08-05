import React, { useEffect } from 'react'
import { useProduct } from '../../../context/ProductContext'
import axios from 'axios'
import { useCart } from '../../../context/CartContext'
import { addToCart } from '../../../helpers/index'
import { discontInPercent } from '../../../utils/index'
import { useNavigate } from 'react-router-dom'
import Rating from '@mui/material/Rating'
import { useAuth } from '../../../context/AuthContext'
import './FeatureProduct.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const FeatureProduct = () => {
  useEffect(() => {
    // productDispatch({ type: 'LOADING' })
    ;(async () => {
      try {
        const { data, status } = await axios.get('api/products')
        if (status === 200) {
          productDispatch({ type: 'GET_ALL_PRODUCTS', payload: data.products })
        }
        console.log(data)
      } catch (error) {
        console.warn(error)
        productDispatch({ type: 'ERROR', payload: error })
      }
    })()
  }, [])
  const navigate = useNavigate()
  const {
    authState: { token }
  } = useAuth()
  const {
    cartState: { cart },
    cartDispatch
  } = useCart()
  const handleAddToCart = product => {
    token ? addToCart(product, token, cartDispatch) : navigate('/signin')
  }
  const {
    productState: { products },
    productDispatch
  } = useProduct()
  let featuredProducts = [...products].filter(
    product => product.featured === true
  )
  return (
    <div className='feature-product'>
      <h1 className='heading'> Feature Product </h1>
      <div className='products__listing'>
        {featuredProducts && featuredProducts.length === 0 ? (
          <h1 className='heading'>No product found</h1>
        ) : (
          featuredProducts?.map(product => {
            const isProductAddedToCart = cart?.find(
              cardProduct => cardProduct._id === product._id
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

                <div className='product__button'>
                  <button
                    className='card-button card-btn-view-more '
                    onClick={() => navigate('/products')}
                  >
                    View more
                  </button>
                  {featuredProducts.length != 0 && isProductAddedToCart ? (
                    <button
                      className='card-button   card-btn-add-to-cart '
                      onClick={() => navigate('/cart')}
                    >
                      View cart
                    </button>
                  ) : (
                    <button
                      className='card-button card-btn-add-to-cart '
                      onClick={() => {
                        handleAddToCart(product)
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
