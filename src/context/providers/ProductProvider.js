import { useReducer } from 'react'
import ProductContext from '../contexts/ProductContext'
import ProductReducer from '../reducers/ProductReducer'
const initialState = {
  products: [],
  loading: false,
  error: null
}
const ProductProvider = props => {
  const [count, dispatch] = useReducer(ProductReducer, initialState)
  return (
    <ProductContext.Provider value={{ count, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  )
}
export default ProductProvider
