import { LOAD_ALL_PRODUCTS, LOADING, ERROR } from '../types'
export const ProductReducer = (state, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true }
    case ERROR:
      return { ...state, loading: flase, error: payload }
    case LOAD_ALL_PRODUCTS:
      return { ...state, loading: false, products: payload }

    default:
      return state
  }
}
