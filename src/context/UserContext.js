import { createContext, useReducer, useContext, useEffect } from 'react'

import { UserReducer } from '../reducers'
const UserContext = createContext(null)

const initialState = {
  orders: [],
  address: [
    {
      name: 'Gourav',
      street: '81/5 Westside PatelNagar ',
      city: 'Kota',
      state: 'Rajasthan',
      country: 'India',
      zipCode: '110009',
      mobileNo: '8949525253',
      _id: '2452ca4a-a330-4748-a7b1-b7df47f13f40'
    }
  ],
  defaultAddress: {
    name: 'Gourav',
    street: '81/5 Westside PatelNagar ',
    city: 'Kota',
    state: 'Rajasthan',
    country: 'India',
    zipCode: '110009',
    mobileNo: '8949525253',
    _id: '2452ca4a-a330-4748-a7b1-b7df47f13f40'
  }
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
