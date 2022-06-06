import { createContext, useContext, useReducer } from 'react'
import { CategoryReducer } from '../reducers'

const CategoryContext = createContext(null)
const initialState = {
  categories: []
}
const CategoryProvider = ({ children }) => {

  const [categoryState, categoryDispatch] = useReducer(
    CategoryReducer,
    initialState
  )
  return (
    <CategoryContext.Provider value={{ categoryState, categoryDispatch }}>
      {children}
    </CategoryContext.Provider>
  )
}
const useCategory = () => useContext(CategoryContext)
export { CategoryProvider, useCategory }
