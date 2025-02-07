import React from 'react';
import { useState , useContext } from 'react';
import UserContext from '../Context/UserContext';
function Login() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const {setUser} = useContext(UserContext);  // setUser function that modify user in UserContext

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password}) // sends the data
    }

    return (
        <>
            <h2>Login</h2>
            <input type="text" placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}} />
            {" "}
            <input type="text" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <button onClick={handleSubmit}> Submit</button>
        </>
    )
}

export default Login