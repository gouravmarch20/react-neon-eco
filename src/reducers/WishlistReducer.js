import {
  GET_ALL_WISHLIST_PRODUCTS,
  ADD_WISHLIST_PRODUCT,
  REMOVE_FROM_WISHLIST
} from '../types'
export const WishlistReducer = (state, { type, payload }) => {
  let noOfItemInWishlist
  switch (type) {
    case GET_ALL_WISHLIST_PRODUCTS:
      return { ...state, wishlist: payload }
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

    default:
      return state
  }
}
