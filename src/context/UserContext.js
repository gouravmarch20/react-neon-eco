import { createContext, useReducer, useContext, useEffect } from 'react'

import { UserReducer } from '../reducers'
const UserContext = createContext(null)

const initialState = {
  orders: [],
  address: []
}

const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(UserReducer, initialState)
  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  )
}
const useUser = () => useContext(UserContext)

export { UserProvider, useUser }
