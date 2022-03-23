import { INCREMENT, DECREMENT, NO_CHANGE } from '../types/CounterTypes'

const CounterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        firstCounter: Number(state.firstCounter + 1),
        secondCounter: Number(state.secondCounter + 5)
      }
    case DECREMENT:
      return { firstCounter: state.firstCounter - 1 }

    case NO_CHANGE:
      return { firstCounter: state.firstCounter + 0 }

    default:
      return {
        ...state,
        firstCounter: state.firstCounter,
        secondCounter: state.secondCounter
      }
  }
}

export default CounterReducer