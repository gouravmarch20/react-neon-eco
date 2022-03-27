import React from 'react'
import './ProductList.css'

import { useProduct } from '../../context/ProductContext'
const ProductList = () => {
  const {
    // !TODO: ASK how DESTRUCT destruct
    state: { products, error }
  } = useProduct()
  return (
    <div className='productList'>
      <div className='products__listing'>
        <section className='products'>
          <img
            src='./images/stationary.jpg'
            alt=''
            className='product__image'
          />
          <p className='product__name'>Link Ocean</p>
          <div className='product__rating'>5 star</div>
          <span className='product__price'>523</span>
        </section>
        <section className='products'>
          <img
            src='./images/stationary.jpg'
            alt=''
            className='product__image'
          />
          <p className='product__name'>Link Ocean</p>
          <div className='product__rating'>5 star</div>
          <span className='product__price'>523</span>
        </section>
        <section className='products'>
          <img
            src='./images/stationary.jpg'
            alt=''
            className='product__image'
          />
          <p className='product__name'>Link Ocean</p>
          <div className='product__rating'>5 star</div>
          <span className='product__price'>523</span>
        </section>
      </div>
    </div>
  )
}

export default ProductList
