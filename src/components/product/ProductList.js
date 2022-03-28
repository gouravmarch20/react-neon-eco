import React from 'react'
import './ProductList.css'

import { useProduct } from '../../context/ProductContext'
const ProductList = () => {
  const {
    // !TODO: ASK how DESTRUCT destruct
    state: { products, error }
  } = useProduct()
  console.log(products)
  return (
    <div className='productList'>
      <div className='products__listing'>
        {products.map(({imageScr ,name , rating, price , _id}) => {
          return (
            <section className='products' key={_id}>
              <img src={imageScr} alt='' className='product__image' />
              <p className='product__name'>{name}</p>
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
