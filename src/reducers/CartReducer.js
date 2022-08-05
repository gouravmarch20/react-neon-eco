import {
  GET_CART,
  ADD_CART_PRODUCT,
  REMOVE_FROM_CART,
  INCREMENT_DECREMENT__QUANTITY,
  EMPTY_CART,
  RESET_CART
} from '../types'
export const CartReducer = (state, { type, payload }) => {
  let noOfItemInCart
  switch (type) {
    case GET_CART:
      noOfItemInCart = payload.length
      return { ...state, cart: payload, totalProductInCart: noOfItemInCart }
    case ADD_CART_PRODUCT:
      noOfItemInCart = payload.length
      return { ...state, cart: payload, totalProductInCart: noOfItemInCart }
    case EMPTY_CART: {
      return { ...state, cart: payload, totalProductInCart: 0 }
    }
    case RESET_CART: {
      return { ...state, cart: [], totalProductInCart: 0 }
    }
    case REMOVE_FROM_CART:
      noOfItemInCart = payload.length
      return {
        ...state,
        cart: payload,
        totalProductInCart: noOfItemInCart
      }
    case INCREMENT_DECREMENT__QUANTITY: {
      return { ...state, cart: payload }
    }
    default:
      return state
  }
}
