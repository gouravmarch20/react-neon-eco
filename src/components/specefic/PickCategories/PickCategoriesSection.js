import React from 'react'
import './PickCategoriesSection.css'
import { useNavigate } from 'react-router-dom'
import { useFilter } from '../../../context/FilterContext'

const PickCategoriesSection = ({ category }) => {
  const navigate = useNavigate()
  const { filterDispatch } = useFilter()

  return (
    <div
      className='pick-category-section'
      onClick={() => {
        filterDispatch({
          type: 'RESET_ALL_FILTER'
        })
        filterDispatch({
          type: 'FILTER_BY_CATEGORY',
          payload: category.categoryName
        })
        navigate('/products')
      }}
    >
      <button className='ctn-btn btn-round'>
        <h2 className='pick-category-section-heading'>
          {category.categoryName}
        </h2>
      </button>
    </div>
  )
}

export default PickCategoriesSection
