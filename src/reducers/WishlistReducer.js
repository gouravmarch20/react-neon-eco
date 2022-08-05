import {
  GET_WISHLIST,
  ADD_WISHLIST_PRODUCT,
  REMOVE_FROM_WISHLIST,
  RESET_WISHLIST
} from '../types'
export const WishlistReducer = (state, { type, payload }) => {
  let noOfItemInWishlist
  switch (type) {
    case GET_WISHLIST:
      noOfItemInWishlist = payload.length
      return {
        ...state,
        wishlist: payload,
        totalProductInWishlist: noOfItemInWishlist
      }
    case ADD_WISHLIST_PRODUCT:
      noOfItemInWishlist = payload.length
      return {
        ...state,
        wishlist: payload,
        totalProductInWishlist: noOfItemInWishlist
      }
    case REMOVE_FROM_WISHLIST:
      noOfItemInWishlist = payload.length
      return {
        ...state,
        wishlist: payload,
        totalProductInWishlist: noOfItemInWishlist
      }
    case RESET_WISHLIST: {
      return { ...state, cart: [], totalProductInWishlist: 0 }
    }

    default:
      return state
  }
}
