import React from 'react'
import Counter from './components/Counter'

import CounterProvider from './context/providers/CounterProvider'
import { Routes, Route, useLocation } from 'react-router-dom'
const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Counter />} />
      <Route path='/home' element={<Counter />} />
    </Routes>
  )
}

const App = () => {
  return (
    <div>
        <h1>gourav</h1>

        <Router />
    </div>
  )
}

export default App
