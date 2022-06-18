import React from 'react'
import './App.css'

import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import { useTheme } from './context/ThemeContext'
import { useAuth } from './context/AuthContext'
import { ToasterWrapper } from './utils/ToasterUtils'

import AppTheme from './color/ColorsOne'
import {
  Home,
  Products,
  Wishlist,
  Cart,
  MyProfile,
  MyAddressPage,
  MyOrderPage,
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
      <Route path='/products' element={<Products />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/my-profile' element={<MyProfile />} />
      <Route path='/my-address' element={<MyAddressPage />} />
      <Route path='/my-order' element={<MyOrderPage />} />
      {/* TODO: */}
      <Route path='/products/:productId' element={<ProductDetail />} />
      {!isLoggedIn && <Route path='/signin' element={<Signin />} />}
      {!isLoggedIn && <Route path='/signup' element={<Signup />} />}
      <Route path='*' element={<Navigate replace to='/' />} />
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
      <ToasterWrapper />

      <Navbar />

      <Router />
    </div>
  )
}

export default App
