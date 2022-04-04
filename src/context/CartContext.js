import { createContext, useContext, useReducer, useEffect } from 'react'
import { CartReducer } from '../reducers'
import { getCart, addToCart } from '../helpers/index'
const CartContext = createContext(null)
const initialState = {
  cart: [],
  cartError: null,
  totalProductInCart: 0
}
const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(CartReducer, initialState)
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  )
}
const useCart = () => useContext(CartContext)
export { CartProvider, useCart }
