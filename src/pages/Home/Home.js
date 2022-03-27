import React, { useContext } from 'react'
import Slider from '../../components/specefic/Slider/Slider'
import PickCategories from '../../components/specefic/PickCategories/PickCategories'

export const Home = () => {
  return (
    <div>
      <Slider />
      <PickCategories />
    </div>
  )
}

