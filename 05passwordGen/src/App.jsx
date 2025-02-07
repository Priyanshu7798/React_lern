import { useState ,useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { use } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")
  const [color,setColor] =useState("olive")

  const passwordGen=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllow) str+="0123456789";
    if(charAllow) str+="!@#$%^&*(_:><";

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random()*str.length +1);
      pass+=str.charAt(char);
    }
    setPassword(pass);


  },[length,numAllow,charAllow,setPassword])

  const copytext=useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(password);
  },[password])


  useEffect(()=>{
    passwordGen()
  },[length,numAllow,charAllow,setPassword])

  // useRef

  const passRef=useRef(null);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-800 text-center'>
      <h1 className='text-center text-white mb-1'>PassWord Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
             type="text"
             value={password}
             placeholder='Password'
             readOnly
             className='outline-none w-full py-1 px-3 text-gray-700 bg-white'
             ref={passRef}
          />
          <button className='shrink-0 outline-none text-white px-3 py-0.5 '
          onClick={copytext} onMouseEnter={()=>setColor("blue")} onMouseLeave={()=>setColor("olive")}
          style={{backgroundColor:color}}
          >COPY</button>
        </div>

        <div className='flex text-sm gap-x-3'>
          <div className='flex items-center gap-x-1'>
             <input 
             type="range" 
             min={6} 
             max={20}
             value={length}
             className='cursor-pointer'
              onChange={(e)=> setlength(e.target.value)}
             />
             <label htmlFor="">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numAllow}
            id='numInput'
            onChange={()=>{
              setNumAllow((prev)=>!prev);
            }}
            />
            <label htmlFor="">Number</label>
          </div >
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            id="charInput"
            defaultChecked={charAllow}
            onChange={()=>setCharAllow((prev)=>!prev)}
           />
           <label htmlFor="">Character</label>
            
          </div>
        </div>
      </div>

    </>
  )
}

export default App
