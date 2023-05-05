import React from 'react'
import './PickCategoriesSection.css'
import { useNavigate } from 'react-router-dom'
import { useFilter } from '../../../context/FilterContext'
import { LazyLoadImage } from 'react-lazy-load-image-component'

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
      <div className='  cursor-pointer'>
        <LazyLoadImage
          src={category.imgUrl}
          alt=''
          className='home_featured-image mt-1'
        />

        <h2 className='subheading'>{category.categoryName}</h2>
      </div>
    </div>
  )
}

export default PickCategoriesSection
