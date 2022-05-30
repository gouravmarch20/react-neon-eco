import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import './Slider.css'
const Slider = () => {
  const [current, setCurrent] = useState(0)
  const length = SliderData.length
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <div className='mt-1 '>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel' className='slider-image' />
            )}
          </div>
        )
      })}
      {/* <div className='slider'>
        <img
          className='slider-image'
          src='https://cdn.shopify.com/s/files/1/0173/7644/4470/files/Desktop_Banner_aee1dc3f-b336-484f-a919-699b9a32b09d.jpg?v=1647869070'
          alt=''
        />
        <div className='slider-left'>
          <ArrowBackIosIcon />
        </div>

        <div className='slider-right'>
          <ArrowForwardIosIcon />
        </div>
      </div> */}
    </div>
  )
}

export default Slider
