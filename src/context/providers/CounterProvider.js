import { useReducer } from 'react'
import CounterContext from '../contexts/CounterContext'
import CounterReducer from '../reducers/CounterReducer'
let initialState = {
  firstCounter: 0,
  secondCounter: 15
}
const CounterProvider = props => {
  const [count, dispatch] = useReducer(CounterReducer, initialState)
  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  )
}
export default CounterProvider
