import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github(){

    // const [data,setData] =useState([])


    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Priyanshu7798')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])

    const data=useLoaderData()

    return(
        <>
            <div className='text-center p-4 bg-black text-white m-4 text-3xl'>Github Followers : {data.followers}
                <img src={data.avatar_url} alt="" width={300} />
            </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async()=>{
    const res = await fetch('https://api.github.com/users/Priyanshu7798')
    return res.json();
}