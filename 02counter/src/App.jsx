import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [counter, setCounter ] = useState(5)


  // let counter = 5;

  const addValue = () => {
    // console.log(counter);
    // counter = counter +1;
    if(counter !=20)
    setCounter(counter+1 )
  }
  const removeValue = () => {
    if(counter != 0){
    setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter value: {counter}</h2>

      <button 
      onClick={addValue}
      >Add Value</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
