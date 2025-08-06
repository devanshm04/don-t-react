
import React from 'react';
import { InputBox } from "./components";
import { useState } from "react";
import "./App.css";
import useCurrencyinfo from "./hooks/useCurrencyinfo";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedamount, setconvertedAmount] = useState(0);

  const currencyInfo = useCurrencyinfo(from)
  const options = Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setconvertedAmount(amount)
    setAmount(convertedamount)
  }
    const convert =()=>{
      setconvertedAmount(amount*currencyInfo[to])
    }

  return (
    <div  
     className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg')`,
        }}
      
      >
    
    
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox 
              label="From" 
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency)=>{
                setFrom(currency)
              }}
              SelectCurrency={from}
              onAmountChange={(amou)=>
              {
                setAmount(amou)
              }}
              

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
               label="To"
               amount={convertedamount}
              currencyOptions={options}
              onCurrencyChange={(currency)=>{
                 setTo(currency)
              }}
            
              SelectCurrency={to}
              amountDisable
               
                />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"

            >
              Convert {from.toUpperCase()} to {to.toLowerCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
    
  );

}

export default App;
