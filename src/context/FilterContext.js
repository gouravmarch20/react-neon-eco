import { createContext, useContext, useReducer, useEffect } from 'react'
import { FilterReducer } from '../reducers'
import { useProduct } from './ProductContext'

const initialState = {
  sortBy: '',
  categories: [],
  brands: [],
  minPrice: 0,
  maxPrice: 0,
  price: 0,
  rating: 0,
  cashOnDelivery: false,
  fastDelivery: false,
  includeOutOfStock: true
}

const FilterContext = createContext(initialState)

const FilterProvider = ({ children }) => {
  const {
    state: { products }
  } = useProduct()
  const [state, dispatch] = useReducer(FilterReducer, initialState)
  useEffect(() => {
    dispatch({ type: 'LOAD_MAX_PRICE', payload: products })
  }, [products])

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  )
}

const useFilter = () => useContext(FilterContext)

export { FilterProvider, useFilter }
