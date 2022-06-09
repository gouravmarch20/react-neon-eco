import { GET_ALL_CATEGORIES } from '../types'
export const CategoryReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_ALL_CATEGORIES:
      return { ...state, categories: payload }

    default:
      return state
  }
}
