import React, { useEffect, useState } from 'react'
import { getUniqueValues, putCommasInPrice } from '../../helpers'
import { useProduct } from '../../context/ProductContext'
import { useFilter } from '../../context/FilterContext'
// import { getUniqueValues, putCommasInPrice } from '../../helpers'

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
  {
    console.log(state)
  }
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
              Reset Filter
            </span>
          </div>
          <hr />

          <section className='filter-section'>
            <h4>Price</h4>
            <input
              type='range'
              min='200'
              max='1001'
              step='100'
              onChange={
                e => {}
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

            <li>
              <label htmlFor='fourStarRating'>
                <input
                  className=''
                  id='fourStarRating'
                  type='radio'
                  name='rating'
                  // checked={rating && rating === 4}
                  onClick={
                    () => console.log('first')
                    // dispatch({ type: 'FILTER_BY_RATING', payload: 4 })
                  }
                />
                4 or more
              </label>
              <label htmlFor='threeStarRating'>
                <input
                  className=''
                  id='threeStarRating'
                  type='radio'
                  name='rating'
                  onChange={
                    () => console.log('secon')
                    // dispatch({ type: 'FILTER_BY_RATING', payload: 4 })
                  }
                />
                3 or more
              </label>
              <label htmlFor='twoStarRating'>
                <input
                  className=''
                  id='twoStarRating'
                  type='radio'
                  name='rating'
                  onChange={
                    () => console.log('secon')
                    // dispatch({ type: 'FILTER_BY_RATING', payload: 4 })
                  }
                />
                2 or more
              </label>
            </li>
          </section>
          <section className='filter-section'>
            <h4>Category</h4>
            {uniqueCategories &&
              uniqueCategories.map((category, index) => {
                return (
                  <li key={index}>
                    <label htmlFor={category}>
                      <input
                        className=''
                        id={category}
                        type='checkbox'
                        checked={console.log(categories.includes(category))}
                        onChange={() => {
                          dispatch({
                            type: 'FILTER_BY_CATEGORIES',
                            payload: category
                          })
                        }}
                      />
                      {category}
                    </label>
                  </li>
                )
              })}
            <input type='checkbox' id='copies' name='bag' value='Copy' />
            <label htmlFor='copies'> Notebook</label>
          </section>

          <section className='filter-section'>
            <h4>Short by Price</h4>
            <label htmlFor='priceHighLow'>
              <input
                type='radio'
                id='priceHighLow'
                name='priceShort'
                onChange={() =>
                  dispatch({ type: 'SORT_BY', payload: 'PRICE_HIGH_TO_LOW' })
                }
              />
              High to Low
            </label>
            <label htmlFor='priceLowHigh'>
              Low to High
              <input
                type='radio'
                id='priceLowHigh'
                onChange={() =>
                  dispatch({ type: 'SORT_BY', payload: 'PRICE_LOW_TO_HIGH' })
                }
                name='priceShort'
              />
            </label>
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
