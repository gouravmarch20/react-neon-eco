import { GET_ALL_PRODUCTS, LOADING, ERROR } from '../types'
export const ProductReducer = (state, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true }
    case ERROR:
      return { ...state, loading: false, error: payload }
    case GET_ALL_PRODUCTS:
      return { ...state, loading: false, products: payload }

    default:
      return state
  }
}
