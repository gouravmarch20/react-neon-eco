import { createContext, useContext, useReducer } from 'react'
import { ThemeReducer } from '../reducers'
const ThemeContext = createContext()
const initialState = {
  themeMode: 'light'
}
const ThemeProvider = ({ children }) => {
  const [themeState, themeDispatch] = useReducer(ThemeReducer, initialState)
  return (
    <ThemeContext.Provider value={{ themeState, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => useContext(ThemeContext)
export { ThemeProvider, useTheme }
