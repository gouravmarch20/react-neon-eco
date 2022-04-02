import React from 'react'

import ProductFilter from '../../components/product/ProductFilter'
import ProductList from '../../components/product/ProductList'
import './Product.css'
export const Product = () => {
  return (
    <div>
      <section className='product'>
        <ProductFilter />
        <ProductList />
      </section>
    </div>
  )
}
