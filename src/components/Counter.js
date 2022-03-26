import React, { useContext } from 'react'
import CounterContext from '../context/contexts/CounterContext'
import { INCREMENT, DECREMENT, NO_CHANGE } from '../context/types/CounterTypes'

const Counter = () => {
  const { count, dispatch } = useContext(CounterContext)
  console.log('Counter state ')

  return (
    <div>
      <h1>{count.firstCounter}</h1>
      <h1>{count.secondCounter}</h1>
      <button
        type='submit'
        onClick={() => {
          dispatch({ type: INCREMENT })
        }}
      >
        Increment
      </button>
      <button
        type='submit'
        onClick={() => {
          dispatch({ type: DECREMENT })
        }}
      >
        Decrement
      </button>
      <button
        type='submit'
        onClick={() => {
          dispatch({ type: NO_CHANGE })
        }}
      >
        No change
      </button>
    </div>
  )
}

export default Counter
