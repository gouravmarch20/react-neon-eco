import {
  FILTER_BY_PRICE,
  FILTER_BY_CATEGORY,
  FILTER_BY_RATING,
  SORT_BY,
  RESET_ALL_FILTER
} from '../types'
export const FilterReducer = (state, { type, payload }) => {
  switch (type) {
    case FILTER_BY_PRICE:
      return { ...state, maxPrice: payload }
    case FILTER_BY_CATEGORY:
      return state.categories.includes(payload)
        ? {
            ...state,
            categories: state.categories.filter(item => item !== payload)
          }
        : {
            ...state,
            categories: [...state.categories, payload]
          }
    case FILTER_BY_RATING:
      if (payload !== 0) return { ...state, rating: payload }
      return { ...state }
    case SORT_BY:
      if (payload === 'PRICE_LOW_TO_HIGH')
        return { ...state, sortBy: 'PRICE_LOW_TO_HIGH' }
      if (payload === 'PRICE_HIGH_TO_LOW')
        return { ...state, sortBy: 'PRICE_HIGH_TO_LOW' }
      return { ...state, sortBy: '' }
    case RESET_ALL_FILTER:
      return { ...state, sortBy: null, rating: 0, maxPrice: 0, categories: [] }
    default:
      return state
  }
}
