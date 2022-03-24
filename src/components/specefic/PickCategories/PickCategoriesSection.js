import React from 'react'
import './PickCategoriesSection.css'
const PickCategoriesSection = ({ item }) => {
  return (
      <div className='pick-category-card'>
        <h2 className='pick-category-section-heading'>{item.title}</h2>
        <img
          className='pick-category-section-img'
          src={item.img}
          alt={item.title}
        />
        {/* <button className='pick-category-section-btn'>View details</button> */}
      </div>
  )
}

export default PickCategoriesSection
