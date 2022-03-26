import React from 'react'
import './App.css'

import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './layout/Navbar/Navbar'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import Wishlist from './pages/Wishlist/Wishlist'
import Cart from './pages/Cart/Cart'
import NotFound from './pages/NotFound/NotFound'
import MyProfile from './pages/MyProfile/MyProfile'
import ProductDetail from './pages/ProductDetail/ProductDetail'

import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/my-profile' element={<MyProfile />} />
      <Route path='/product/:id' element={<ProductDetail />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
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
