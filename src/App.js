import React from 'react'
import './App.css'
import Mockman from 'mockman-js'

import { Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar/Navbar'
import { useTheme } from './context/ThemeContext'
import { useAuth } from './context/AuthContext'

import AppTheme from './color/Colors'
import {
  Home,
  Product,
  Wishlist,
  Cart,
  NotFound,
  MyProfile,
  ProductDetail,
  Signin,
  Signup
} from './pages/index'

const Router = () => {
  const {
    authState: { isLoggedIn }
  } = useAuth()
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/home' element={<Home />} />
      <Route path='/products' element={<Product />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/my-profile' element={<MyProfile />} />
      <Route path='/products/:productId' element={<ProductDetail />} />
      {!isLoggedIn && <Route path='/signin' element={<Signin />} />}
      {!isLoggedIn && <Route path='/signup' element={<Signup />} />}
      <Route path='/mockman' element={<Mockman />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

const App = () => {
  const {
    themeState: { themeMode }
  } = useTheme()
  const currectTheme = AppTheme[themeMode]
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
