import { createContext, useContext, useReducer, useEffect } from 'react'
import { FilterReducer } from '../reducers'
import { useProduct } from './ProductContext'

const initialState = {
  categories: [],
  maxPrice: 0,
  rating: 0,
  sortBy: null
}

const FilterContext = createContext(initialState)

const FilterProvider = ({ children }) => {
  const {
    productState: { products }
  } = useProduct()
  const [filterState, filterDispatch] = useReducer(FilterReducer, initialState)
  useEffect(() => {
    filterDispatch({ type: 'LOAD_MAX_PRICE', payload: products })
  }, [products])

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  )
}

const useFilter = () => useContext(FilterContext)

export { FilterProvider, useFilter }
