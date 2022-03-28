import {
  LOAD_MAX_PRICE,
  FILTER_BY_CATEGORIES,
  FILTER_BY_BRANDS,
  //   FILTER_BY_PRICE,
  //   FILTER_BY_RATING,
  //   SORT_BY,
  //   FILTER_BY_CASH_ON_DELIVERY,
  FILTER_BY_FAST_DELIVERY
  //   FILTER_BY_OUT_OF_STOCK,
  //   CLEAR_ALL_FILTERS
} from '../types'

export const FilterReducer = (state, { type, payload }) => {
  switch (type) {
    case LOAD_MAX_PRICE:
      return { state }
    case FILTER_BY_CATEGORIES: {
    }
    case FILTER_BY_BRAND: {
    }
    case FILTER_BY_BRANDS: {
    }
    case FILTER_BY_PRICE: {
    }
    case FILTER_BY_RATING: {
    }
    case SORT_BY: {
    }
    case FILTER_BY_CASH_ON_DELIVERY: {
    }
    case FILTER_BY_OUT_OF_STOCK: {
    }
    case CLEAR_ALL_FILTERS: {
    }
  }
}
