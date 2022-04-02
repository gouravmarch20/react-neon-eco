import React from 'react'
import './PickCategoriesSection.css'
import { useNavigate } from 'react-router-dom'
import { useFilter } from '../../../context/FilterContext'

const PickCategoriesSection = ({ category }) => {
  const navigate = useNavigate()
  const { filterDispatch } = useFilter()

  return (
    <div
      className='card'
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
      <h2 className='pick-category-section-heading'>{category.categoryName}</h2>

      <img
        className='card-image'
        src={category.imgUrl}
        alt={category.categoryName}
      />

      {/* <button className='pick-category-section-btn'>View details</button> */}
    </div>
  )
}

export default PickCategoriesSection
