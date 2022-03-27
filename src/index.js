import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { makeServer } from './server'
import { BrowserRouter } from 'react-router-dom'
import CounterProvider from './context/providers/CounterProvider'
import ProductProvider from './context/providers/ProductProvider'

// Call make Server
makeServer()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CounterProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CounterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
