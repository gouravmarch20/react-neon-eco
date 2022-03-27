import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { makeServer } from './server'
import { BrowserRouter } from 'react-router-dom'

import { ProductProvider } from './context/ProductContext'


makeServer()
// TODO: TO KNEW ANY CHANGE IN BROWSER ROUTER BELOW ==> WRAP IN BROWSER ROUTER GOOD WAY
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        {/* <FilterProvider> */}
        <App />
      </ProductProvider>
    </BrowserRouter>
    {/* </FilterProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
)
