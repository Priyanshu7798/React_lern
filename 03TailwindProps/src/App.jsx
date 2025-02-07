import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    age:22,
    UserName:"Priyanshu"
  }

  let myArr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-red-400 rounded-xl p-4  text-black'>TailWind Test</h1>

      <Cards username="Priyanshu" price="57" cents='0.08' />
      <Cards username="Keshav" price="89" />
      
    </>
  )
}

export default App
