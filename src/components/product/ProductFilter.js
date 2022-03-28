import React, { useEffect, useState } from 'react'
import { getUniqueValues, putCommasInPrice } from '../../helpers'
import { useProduct } from '../../context/ProductContext'
import { useFilter } from '../../context/FilterContext'
import './ProductFilter.css'
const ProductFilter = () => {
  const [filterData, setFilterData] = useState({
    priceRange: 200
  })
  const [uniqueCategories, setUniqueCategories] = useState([])
  const [uniqueBrands, setUniqueBrands] = useState([])
  const {
    state: { products }
  } = useProduct()
  const { state, dispatch } = useFilter()
  const {
    categories,
    brands,
    sortBy,
    minPrice,
    maxPrice,
    price,
    rating,
    cashOnDelivery,
    fastDelivery,
    includeOutOfStock
  } = state

  useEffect(() => {
    setUniqueCategories(getUniqueValues(products, 'categoryName'))
    setUniqueBrands(getUniqueValues(products, 'brand'))
  }, [products])
  return (
    <>
      <aside className='product__filter'>
        <div className='product__filter__container'>
          <div className='product__header '>
            <span className='product__header__span'>Filter</span>
            <span
              className='product__header__span'
              onClick={() => dispatch({ type: 'CLEAR_ALL_FILTERS' })}
            >
              Reset
            </span>
          </div>
          <hr />

          <section className='filter-section'>
            <h4>Price</h4>
            <input
              // id='priceRange'
              type='range'
              min='200'
              max='1001'
              step='100'
              onChange={
                e => {
                  console.log(e.target.value)
                }
                // filterDispatch({
                //   type: 'FILTER_BY_PRICE_RANGE',
                //   payload: e.target.value
                // })
              }
            />

            <p>{filterData.priceRange}</p>
          </section>
          <section className='filter-section'>
            <h4>Product rating</h4>
            <div>
              <input type='radio' id='5-star' value='5' name='product-rating' />
              <label htmlFor='5-star'> 5 ⭐️ only</label>
            </div>
            <div>
              <input type='radio' id='4-star' value='4' name='product-rating' />
              <label htmlFor='4-star'> 4 ⭐️ & Above </label>
            </div>
            <div>
              <input type='radio' id='3-star' value='3' name='product-rating' />
              <label htmlFor='3-star'> 3 ⭐️ & Above </label>
            </div>
          </section>
          <section className='filter-section'>
            <h4>Category</h4>
            <div>
              <input type='checkbox' id='schoolBag' name='bag' value='Bag' />
              <label htmlFor='schoolBag'> School Bag</label>
            </div>
            <div>
              <input type='checkbox' id='pens' name='pens' value='Pen' />
              <label htmlFor='pens'> Pens</label>
            </div>
            <div>
              <input type='checkbox' id='copies' name='bag' value='Copy' />
              <label htmlFor='copies'> Notebook</label>
            </div>
          </section>
          {/* option tag  */}
          {/* upcoming */}
          {/* discout, brands  , type , color  , gender , availability , category: a4 size , a5 size  , Sort By
           */}
        </div>
      </aside>
    </>
  )
}

export default ProductFilter
