import React from 'react'
import './PickCategories.css'
import PickCategoriesSection from './PickCategoriesSection'
import { useCategory } from '../../../context/CategoryContext'
const PickCategories = () => {
  const { categoryState } = useCategory()
  let categories = categoryState.categories
  return (
    <>
      <h1 className='heading mt-1'>Shop By Category</h1>
      <div className='pick-categories'>
        {categories?.length > 0 &&
          categories.map((category, index) => (
            <div key={index}>
              <PickCategoriesSection category={category} />
            </div>
          ))}
      </div>
    </>
  )
}

export default PickCategories
