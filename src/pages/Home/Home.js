import React, { useContext, useEffect, useState } from 'react'
import Slider from '../../components/specefic/Slider/Slider'
import PickCategories from '../../components/specefic/PickCategories/PickCategories'
import { getCategoryDeatail } from '../../helpers'

import { useCategory } from '../../context/CategoryContext'
export const Home = () => {
  const { categoryDispatch } = useCategory()
  useEffect(async () => {
    const tempCategory = await getCategoryDeatail()
    
    categoryDispatch({ type: 'LOAD_ALL_CATEGORIES', payload: tempCategory.categories })
  }, [])

  return (
    <div>
      <Slider />
      <PickCategories />
    </div>
  )
}
