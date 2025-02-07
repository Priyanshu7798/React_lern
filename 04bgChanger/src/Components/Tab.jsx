import { useState } from "react";
import '../index.css'


function Tab({setColor}) {
    return(
        <> 
            <div className=" flex flex-wrap justify-center fixed bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap rounded-3xl bg-white shadow-lg gap-3 px-3 py-2">
                    <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 shadow-lg rounded-full  text-white"
                    style={{backgroundColor:"red"}}
                    >RED</button>
                    <button className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
                    style={{backgroundColor:"red"}}
                    >GREEN</button>
                    <button className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
                    style={{backgroundColor:"red"}}
                    >BLUE</button>
                    <button className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
                    style={{backgroundColor:"red"}}
                    >PINK</button>
                </div>
            </div>
        </>
    )
}

export default Tab