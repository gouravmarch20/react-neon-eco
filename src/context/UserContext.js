import { createContext, useState, useContext } from 'react'

const UserContext = createContext()
const UserContextProvider = ({ children }) => {
  const [isUserLogin, setIsUserLogin] = useState(false)
  return (
    <UserContext.Provider value={{ isUserLogin, setIsUserLogin }}>
      {children}
    </UserContext.Provider>
  )
}
const useUserContext = () => useContext(UserContext)

export { useUserContext, UserContextProvider }
