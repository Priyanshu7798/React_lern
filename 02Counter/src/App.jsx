import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(0);

  const add = () =>{

    if(counter>=20){
      setCounter(20);
    }else{
      setCounter(counter+1);
    }
    console.log('Clicked',counter);
  }
  const remove = () =>{

    if(counter<=0){
      setCounter(0);
    }else{
      setCounter(counter-1);
    }
    
    console.log('Clicked',Math.random());
  }

  return (
    <>

      
     <h1>React Counter Project</h1>
     <p>Count the number of click  {counter}</p>

     <button onClick={add}> Add Counter </button>
     <br />
     <button onClick={remove}> Remove Counter </button>
    </>
  )
}

export default App
