import React from 'react'
import './ProductList.css'
import { getSortedProducts, getFilteredProducts } from '../../utils/index'
import { useProduct } from '../../context/ProductContext'
import { useFilter } from '../../context/FilterContext'

const ProductList = () => {
  const {
    productState: { products, error }
  } = useProduct()
  const { filterState, filterDispatch } = useFilter()
  const sortedProducts = getSortedProducts(products, filterState)
  const filteredProducts = getFilteredProducts(sortedProducts, filterState)
  console.log(filterState)
  return (
    <div className='productList'>
      <div className='products__listing'>
        {filteredProducts && filteredProducts.length === 0 ? (
          <h1>No product found</h1>
        ) : (
          filteredProducts?.map(({ imageSrc, title, rating, price, _id }) => {
            return (
              <section className='products card' key={_id}>
                <img src={imageSrc} alt='' className='product__image' />
                <p className='card-title'>{title}</p>
                <p className='product__rating'>{rating}</p>
                <p className='card-price'>{price}</p>
                <div className='product__button'>
                  <button className='btn btn-info'>add to cart </button>
                  <button className='btn btn-success'>add to wishlist </button>
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
