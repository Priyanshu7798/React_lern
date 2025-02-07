import { useState } from 'react'

import Tab from './Components/Tab'
function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200 m-0 p-0' style={{backgroundColor:color}}>
      <div className=" flex flex-wrap justify-center fixed bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap rounded-3xl bg-white shadow-lg gap-3 px-3 py-2">
          <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 shadow-lg rounded-full  text-white"
          style={{backgroundColor:"red"}}
          >RED</button>
          <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
          style={{backgroundColor:"green"}}
          >GREEN</button>
          <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
          style={{backgroundColor:"blue"}}
          >BLUE</button>
          <button onClick={()=>setColor('pink')} className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
          style={{backgroundColor:"pink"}}
          >PINK</button>
        </div>
      </div>
    </div>
  )
}

export default App
