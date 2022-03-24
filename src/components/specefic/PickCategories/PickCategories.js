import React from 'react'
import { categories } from './data'
import './PickCategories.css'
import PickCategoriesSection from './PickCategoriesSection'

const PickCategories = () => {
  return (
    <>
      <h1>Rail  Category</h1>
      <div className='pick-categories'>
        {categories.map(item => {
          return <PickCategoriesSection key={item.id} item={item} />
        })}
      </div>
    </>
  )
}

export default PickCategories
