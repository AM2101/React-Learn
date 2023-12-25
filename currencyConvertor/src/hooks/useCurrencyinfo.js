import { useEffect, useState } from "react";


function useCurrencyinfo(currncy){

    const [data, setData] = useState({})


    useEffect( ()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currncy]))
        console.log(data);
    } , [currncy])
    return data;
}

export default useCurrencyinfo;