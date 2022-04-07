import React, { useEffect, useState } from 'react'
import { useProduct } from '../../context/ProductContext'
import { useFilter } from '../../context/FilterContext'
import { getUniqueValues } from '../../utils/filterUtils'

import './ProductFilter.css'
const ProductFilter = () => {
  const [uniqueCategories, setUniqueCategories] = useState([])
  const [priceRange, setPriceRange] = useState(1000)
  const {
    productState: { products }
  } = useProduct()
  const { filterState, filterDispatch } = useFilter()

  const {
    categories,

    sortBy,
    maxPrice,

    rating
  } = filterState
  useEffect(() => {
    setUniqueCategories(getUniqueValues([...products], 'categoryName'))
  }, [products])
  return (
    <>
      <aside className='product__filter'>
        <div className='product__filter__container'>
          <div className='product__header '>
            <button className='product__header__heading btn btn-info'>
              Filter Box
            </button>
            <button
              className='product__header__heading btn btn-danger'
              onClick={() => filterDispatch({ type: 'RESET_ALL_FILTER' })}
            >
              Reset Filter
            </button>
          </div>
          <div className='divider-mini' />
          <section className='filter-section'>
            <h4 className='text-center '>Price</h4>
            <input
              type='range'
              min='200'
              max='1001'
              step='100'
              value={priceRange}
              onChange={e => {
                setPriceRange(e.target.value)
                filterDispatch({
                  type: 'FILTER_BY_PRICE',
                  payload: e.target.value
                })
              }}
            />
            <div className='price-detail'>
              FROM <span>₹200</span> TO
              <span>₹{priceRange}</span>
            </div>
          </section>
          <div className='divider-mini'></div>
          <section className='filter-section'>
            <h4 className='text-center'>Category</h4>
            {uniqueCategories &&
              uniqueCategories.map((category, index) => {
                return (
                  <li key={index}>
                    <label htmlFor={category}>
                      <input
                        id={category}
                        type='checkbox'
                        checked={categories.includes(category)}
                        onChange={() => {
                          filterDispatch({
                            type: 'FILTER_BY_CATEGORY',
                            payload: category
                          })
                        }}
                      />
                      {category}
                    </label>
                  </li>
                )
              })}
          </section>
          <div className='divider-mini'></div>
          <section className='filter-section'>
            <h4 className='text-center'>Product rating</h4>

            <li>
              <label className='display-block' htmlFor='fourStarRating'>
                <input
                  className=''
                  id='fourStarRating'
                  type='radio'
                  name='rating'
                  onChange={() =>
                    filterDispatch({ type: 'FILTER_BY_RATING', payload: 4 })
                  }
                />
                4 or more
              </label>
              <label htmlFor='threeStarRating' className='display-block'>
                <input
                  className=''
                  id='threeStarRating'
                  type='radio'
                  name='rating'
                  onChange={() =>
                    filterDispatch({ type: 'FILTER_BY_RATING', payload: 3 })
                  }
                />
                3 or more
              </label>
              <label htmlFor='twoStarRating' className='display-block'>
                <input
                  className=''
                  id='twoStarRating'
                  type='radio'
                  name='rating'
                  onChange={() =>
                    filterDispatch({ type: 'FILTER_BY_RATING', payload: 2 })
                  }
                />
                2 or more
              </label>
            </li>
          </section>{' '}
          <div className='divider-mini'></div>
          <section className='filter-section'>
            <h4 className='text-center'>Short by Price</h4>

            <label htmlFor='priceHighLow' className='input-text display-block'>
              <input
                type='radio'
                id='priceHighLow'
                name='priceShort'
                onChange={() =>
                  filterDispatch({
                    type: 'SORT_BY',
                    payload: 'PRICE_HIGH_TO_LOW'
                  })
                }
              />
              High to Low
            </label>
            <label htmlFor='priceLowHigh' className='input-text display-block '>
              <input
                type='radio'
                id='priceLowHigh'
                onChange={() =>
                  filterDispatch({
                    type: 'SORT_BY',
                    payload: 'PRICE_LOW_TO_HIGH'
                  })
                }
                name='priceShort'
              />
              Low to High
            </label>
          </section>
          <div className='divider-mini'></div>
          <p className='text-center'>❤️ ❤️ ❤️ ❤️</p>
          <div className='divider'></div>
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
