import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { makeServer } from './server'
import { BrowserRouter } from 'react-router-dom'

// import { ProductProvider } from './context/ProductContext'
// import { FilterProvider } from './context/FilterContext'

makeServer()
// TODO: TO KNEW ANY CHANGE IN BROWSER ROUTER BELOW ==> WRAP IN BROWSER ROUTER GOOD WAY
ReactDOM.render(
  <React.StrictMode>
    {/* <ProductProvider> */}
      {/* <FilterProvider> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </FilterProvider> */}
    {/* </ProductProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
)
