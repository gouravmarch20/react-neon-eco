import React from 'react'
import './App.css'

import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './layout/Navbar/Navbar'
import Home from './pages/Home/Home'
const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/home' element={<Counter />} /> */}
    </Routes>
  )
}

const App = () => {
  return (
    <div class='App'>
      <Navbar />
      <Router />
    </div>
  )
}

export default App
