    import { useEffect,useState } from "react";

    function useCurrencyInfo (currency) {
        const [data,setData] = useState({})

        useEffect(()=>{

            // API call
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res)=>res.json()) // converts it to string to JSON
            .then((res)=>setData(res[currency])) // access the data currency object
            console.log(data);

        },[currency])
        // console.log(data);
        return data; 
    }

    export default useCurrencyInfo  // return the data thorugh the Function call in other page