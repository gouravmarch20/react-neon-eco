import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { makeServer } from './server'
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import { ProductProvider } from './context/ProductContext'
import { AuthProvider } from './context/AuthContext'
import { FilterProvider } from './context/FilterContext'
import { CategoryProvider } from './context/CategoryContext'
import { UserProvider } from './context/UserContext'
import { WishlistProvider } from './context/WishlistContext'
import { CartProvider } from './context/CartContext'
import { ThemeProvider } from './context/ThemeContext'

makeServer()
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <CategoryProvider>
            <ProductProvider>
              <UserProvider>
                <WishlistProvider>
                  <CartProvider>
                    <FilterProvider>
                      <App />
                    </FilterProvider>
                  </CartProvider>
                </WishlistProvider>
              </UserProvider>
            </ProductProvider>
          </CategoryProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
