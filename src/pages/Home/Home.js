import React, { useContext, useEffect, useState } from 'react'
import Slider from '../../components/specefic/Slider/Slider'
import PickCategories from '../../components/specefic/PickCategories/PickCategories'
import { getCategoryDeatail } from '../../helpers'

import { useCategory } from '../../context/CategoryContext'
import FeatureProduct from '../../components/specefic/FeaturedProduct/FeatureProduct'

export const Home = () => {
  const { categoryDispatch } = useCategory()
  useEffect(async () => {
    // TODO: OPTIMISE AVOID THIS
    const tempCategory = await getCategoryDeatail()

    categoryDispatch({
      type: 'GET_ALL_CATEGORIES',
      payload: tempCategory.categories
    })
  }, [])

  return (
    <div>
      <Slider />
      <PickCategories />

      <FeatureProduct />
    </div>
  )
}
