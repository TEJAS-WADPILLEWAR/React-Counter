import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter < 20) {
      console.log("clicked", counter);
      // counter = counter + 1 
      setCounter(counter + 1)
    }
  }
  const removeValue = () => {
    if (counter > 0) {
      console.log("clicked", counter);
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}>Add value {counter}</button>
      <br />
      <button
        onClick={removeValue}>Remove value {counter} </button>
      <p>footer: {counter} </p>

    </>
  )
}

export default App
