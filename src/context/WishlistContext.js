import { createContext, useContext, useReducer, useEffect } from 'react'
import { WishlistReducer } from '../reducers'
import { getWishlist } from '../helpers/WishlistHelper'
const WishlistContext = createContext(null)
const initialState = {
  wishlist: [],
  wishlistError: null,
  totalProductInWishlist: 0
}
const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    WishlistReducer,
    initialState
  )

  useEffect(() => {
    // getWishlist(wishlistDispatch)
  }, [])

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  )
}
const useWishlist = () => useContext(WishlistContext)
export { WishlistProvider, useWishlist }
