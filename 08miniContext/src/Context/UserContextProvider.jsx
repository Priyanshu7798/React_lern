import React from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({children})=>{  // add children as a props to access the different component

    const [user,setUser] = React.useState(null)

    return(
        <UserContext.Provider value={{user,setUser}}>
            {children} 
        </UserContext.Provider>
    )
}

// value={{user,setUser}}  pass object as a prop to give data to the reqd components Can also pass API data thorugh this

export default UserContextProvider