import { DARK_MODE, LIGHT_MODE } from '../types'
export const ThemeReducer = (state, { type, payload }) => {
  switch (type) {
    case DARK_MODE:
      return { ...state, themeMode: payload }

    case LIGHT_MODE:
      return { ...state, themeMode: payload }

    default:
      return state
  }
}
