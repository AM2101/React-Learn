import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username: 'arsh',
    age:21
  }
  let newArr =[1,2,3]

  return (
    <>
      <h1 className='bg-green-500 text-stone-950 p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card userName="chaiaurcode" btnText ="Click ME" />
      <Card userName="Arsh" btnText="Visit me" />
     
    </>
  )
}

export default App
