import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { makeServer } from './server'
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import { ProductProvider } from './context/ProductContext'
import { FilterProvider } from './context/FilterContext'
import { CategoryProvider } from './context/CategoryContext'
import { WishlistProvider } from './context/WishlistContext'
import { CartProvider } from './context/CartContext'

makeServer()
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <ProductProvider>
          <WishlistProvider>
            <CartProvider>
              <FilterProvider>
                <App />
              </FilterProvider>
            </CartProvider>
          </WishlistProvider>
        </ProductProvider>
      </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
