import React from 'react';
import UserContext from '../Context/UserContext';
import { useContext } from 'react';

function Profile() {

    const {user} = useContext(UserContext);

    // condtional ellemet

    if(!user) return <div> Please Login</div>
    
    if(user.password === "123"){
        return <> Your Password is correct</>
    }
    <br />
    return <div> Welcome {user.username} Your Password is : {user.password}</div>
    
}

export default Profile