import React from 'react'
import './ProductFilter.css'
const ProductFilter = () => {
  return (
    <>
      <aside className='product__filter'>
        <div className='product__filter__container'>
          <div className='product__header '>
            <span className='product__header__span'>Filter</span>
            <span className='product__header__span'>Reset</span>
          </div>
          <hr />
          <section className='filter-section'>
            <h4>Price</h4>
            <input
              type='range'
              min='500'
              max='5000'
              step='1000'
              list='priceList'
            />
            <datalist id='priceList'>
              <option label='500' value='500'></option>
              <option label='500' value='1500'></option>
              <option label='500' value='2500'></option>
              <option label='500' value='3500'></option>
              <option label='500' value='4500'></option>
            </datalist>
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
          {/* upcoming */}
          {/* discout, brands  , type , color  , gender , availability , category: a4 size , a5 size  , Sort By
           */}
        </div>
      </aside>
    </>
  )
}

export default ProductFilter
