import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import './Slider.css'
const Slider = () => {
  return (
    <div className="overlay-container">
        <div className='slider'>
        <img
          className='slider-image'
          src='https://rukminim1.flixcart.com/flap/1800/1800/image/0621cc612c281bf2.jpg?q=80'
          alt=''
        />
        <div className='slider-left'>
          <ArrowBackIosIcon />
        </div>

        <div className='slider-right'>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  )
}

export default Slider
