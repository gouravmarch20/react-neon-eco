import React from 'react'
import './App.css'

import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './layout/Navbar/Navbar'

import {
  Home,
  Product,
  Wishlist,
  Cart,
  NotFound,
  MyProfile,
  ProductDetail,
  Signin,
  Signup,MockmanApi
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
      <Route path='/product/:id' element={<ProductDetail />} /> 
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/mockman' element={<MockmanApi />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Router />
    </div>
  )
}

export default App
