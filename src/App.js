import React from 'react'
import  './App.css'

import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './layout/Navbar/Navbar'
import { useTheme } from './context/ThemeContext'
import AppTheme from './Colors'
import {
  Home,
  Product,
  Wishlist,
  Cart,
  NotFound,
  MyProfile,
  ProductDetail,
  Signin,
  Signup,
  MockmanApi
} from './pages/index'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/products' element={<Product />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/my-profile' element={<MyProfile />} />
      <Route path='/products/:productId' element={<ProductDetail />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/mockman' element={<MockmanApi />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

const App = () => {
  const { themeState :{themeMode}, themeDispatch } = useTheme()
  // console.log(themeState)
  const currectTheme = AppTheme[themeMode];
console.log(currectTheme)
  return (
    <div
      className='App'
      style={{
        backgroundColor: `${currectTheme.backgroundColor}`,
        color: `${currectTheme.textColor}`,
        textAlign: 'center'
      }}
    >
      <Navbar />
     
      <Router />
    </div>
  )
}

export default App
