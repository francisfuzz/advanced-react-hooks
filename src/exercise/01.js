// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// https://stackoverflow.com/a/7356528
function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
 }

function countReducer(state, action) {
  // If the action is a function, return the evaluated expression of the function
  // passing in the current state.
  if (isFunction(action)) {
    return action(state)
  }

  return {
    ...state,
    ...action
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const { count } = state

  const increment = () => setState({count: count + step})
  const decrement = () => setState(currentState => ({count: currentState.count - step}))
  return (
    <>
      <button onClick={increment}>{count}</button>
      <button onClick={decrement}>{count}</button>
    </>
  )
}

function App() {
  return <Counter />
}

export default App
