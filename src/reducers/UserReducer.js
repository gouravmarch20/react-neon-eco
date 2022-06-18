import {
  UPDATE_ADDRESS,
  ADD_ADDRESS,
  DELETE_ADDRESS,
  ADD_ORDER,
  GET_ORDER,
  GET_ADDRESS
} from '../types'
import { v4 as uuid } from 'uuid'

export const UserReducer = (state, { type, payload }) => {
  switch (type) {
    case UPDATE_ADDRESS:
      return { ...state, address: payload }
    case ADD_ADDRESS:
      const toadd = { ...payload, _id: uuid() }
      return { ...state, address: [...state.address, toadd] }
    case DELETE_ADDRESS:
      return { ...state, address: payload }
    case ADD_ORDER:
      return { ...state }
    case GET_ORDER:
      return { ...state }
    case GET_ADDRESS:
      return { ...state }

    default:
      console.warn('first')
      return state
  }
}
