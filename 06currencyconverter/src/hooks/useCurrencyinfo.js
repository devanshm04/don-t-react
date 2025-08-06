import { useState,useEffect } from "react";

function useCurrencyinfo(currency){
    const[data,setData] = useState({})
    // console.log("currendxcygvbduyvb = ",currency)
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => {
            // console.log("we are herree suhgfcisudgbsjui")
            // console.log("herre", res)
            setData(res[currency])
        })
    }, [currency])
    // console.log(data);
    return data
}

export default useCurrencyinfo;