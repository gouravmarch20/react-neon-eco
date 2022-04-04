import { createContext, useContext, useReducer, useEffect } from 'react'
import axios from 'axios'
import { ProductReducer } from '../reducers'
const ProductContext = createContext(null)

const initialState = {
  products: [],
  loading: false,
  error: null
}

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    ProductReducer,
    initialState
  )
  useEffect(() => {
    productDispatch({ type: 'LOADING' })
    ;(async () => {
      try {
        const { data, status } = await axios.get('api/products')
        if (status === 200) {
          productDispatch({ type: 'GET_ALL_PRODUCTS', payload: data.products })
        }
      } catch (error) {
        productDispatch({ type: 'ERROR', payload: error })
      }
    })()
  }, [])

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  )
}

const useProduct = () => useContext(ProductContext)

export { ProductProvider, useProduct }
