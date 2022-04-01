import React from 'react'
import './ProductList.css'
import {
  getSortedProducts,
  getFilteredProducts,
  priceAfterDiscount,
  putCommasInPrice
} from '../../helpers'
import { useProduct } from '../../context/ProductContext'
import { useFilter } from '../../context/FilterContext'

const ProductList = () => {
  const {
    state: { products, error }
  } = useProduct()
  const { state, dispatch } = useFilter()
  const sortedProducts = getSortedProducts(products, state)
  const filteredProducts = getFilteredProducts(sortedProducts, state)

  return (
    <div className='productList'>
    
      <div className='products__listing'>
        {products.map(({ imageSrc, title, rating, price, _id }) => {
          return (
            <section className='products' key={_id}>

              <img src={imageSrc} alt='' className='product__image' />
              <p className='product__name'>{title}</p>
              <p className='product__rating'>{rating}</p>
              <p className='product__price'>{price}</p>
              <div className='product__button'>
                <button className='btn btn-info'>add to cart </button>
                <button className='btn btn-success'>add to wishlist </button>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default ProductList
