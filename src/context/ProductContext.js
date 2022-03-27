import { createContext, useContext, useReducer, useEffect } from 'react'
import axios from 'axios'
import { ProductReducer } from '../reducers'
// import { LOAD_ALL_PRODUCTS, ERROR } from '../types'
const ProductContext = createContext(null)

const initialState = {
  products: [],
  loading: false,
  error: null
}

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState)

  const getProductDetails = async () => {
    try {
      const { data, status } = await axios.get('api/products')
      return { data, status }
    } catch (error) {
      return { error }
    }
  }

  useEffect(async () => {
    dispatch({ type: 'LOADING' })
    const { data, status, error } = await getProductDetails()

    status === 200
      ? dispatch({ type: 'LOAD_ALL_PRODUCTS', payload: data })
      : dispatch({ type: 'ERROR', payload: error })
  }, [])

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  )
}

const useProduct = () => useContext(ProductContext)

export { ProductProvider, useProduct }
