import {
  GET_ALL_CART_PRODUCTS,
  ADD_CART_PRODUCT,
  REMOVE_FROM_CART
} from '../types'
export const CartReducer = (state, { type, payload }) => {
  let noOfItemInCart
  switch (type) {
    case GET_ALL_CART_PRODUCTS:
      return { ...state, cart: payload }
    case ADD_CART_PRODUCT:
      noOfItemInCart = payload.length
      console.log(noOfItemInCart)
      return { ...state, cart: payload, totalProductInCart: noOfItemInCart }
    case REMOVE_FROM_CART:
      noOfItemInCart = payload.length
      console.log(noOfItemInCart)
      return {
        ...state,
        cart: payload,
        totalProductInCart: noOfItemInCart
      }
    default:
      return state
  }
}
