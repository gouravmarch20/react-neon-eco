import { createContext, useContext, useReducer, useEffect } from 'react'
import { WishlistReducer } from '../reducers'
import { getWishlist } from '../helpers/WishlistHelper'
const WishlistContext = createContext(null)
const initialState = {
  wishlist: [],
  wishlistError: null,
  totalProductInWishlist: 0
}
import { useAuth } from '../context/AuthContext'

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    WishlistReducer,
    initialState
  )
  const {
    authState: { token, isLoggedIn }
  } = useAuth()

  useEffect(() => {
    token && getWishlist(token, wishlistDispatch)
  }, [token])

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  )
}
const useWishlist = () => useContext(WishlistContext)
export { WishlistProvider, useWishlist }
