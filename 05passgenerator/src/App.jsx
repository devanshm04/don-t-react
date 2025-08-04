import React, { useCallback, useEffect, useRef } from 'react'
import { useState } from 'react'

function App(){
  const [lenght, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

   const passRef = useRef(null)

  
   // it just store it to optimize it and we have used setpassword instead of 
   //  pass bcoz pass will keep on changing and wo usko run he karte jaayga and optimize he karta rhega
   // in usecallback we r using it bcoz if any changes in dependency arr occur this will optimize the method
  const Passwordgenerator = useCallback(() => {   
    let password = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+[]{}|;:,.<>?/"
    }
    for (let i = 0; i < lenght; i++) {
      const randomIndex = Math.floor(Math.random() * str.length)
      password += str[randomIndex]
    }
    setPassword(password)

  }, [lenght, numberAllowed, characterAllowed])

    const copypasstoclip = useCallback(()=>{
      passRef.current?.select();
      window.navigator.clipboard.writeText(password)
      
    },[password])

  // we using to re render the method if any changes in dependency array
  useEffect(()=>{
    Passwordgenerator()
  },[lenght, numberAllowed, characterAllowed,Passwordgenerator])
  
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3  my-8 text-orange-500 bg-gray-800">
      <h1 className='text-2xl font-bold mb-4 text-center my-3 text-white'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white text-black'>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passRef}

        />
        <button 
        onClick={copypasstoclip}
          className='bg-blue-500 text-white px-4 py-2 transition-transform duration-200 hover:bg-green-600 hover:scale-105 active:scale-95 active:bg-green-700'
           >Copy</button>


          
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
      <input
        type="range"
        min={6}
        max={100}
        value={lenght}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
      />
         <label>Length : {lenght}</label>
      </div>
       <div className='flex items-center gap-x-1'>
       <input 
       type='checkbox'
       defaultChecked={numberAllowed}
       id='numberInput'
       onChange={()=>{
        setNumberAllowed((prev)=>!prev);
       }}
       />
       <label htmlFor='numberInput'>
          Numbers
       </label>
         <div className='flex items-center gap-x-1'>
           <input
            type='checkbox'
            defaultChecked={characterAllowed}
            id='charInput'
            onChange={()=>{
              setCharacterAllowed((prev)=>!prev)
            }}
           />
           <label htmlFor='charInput'>
          characters
          </label>
         </div>
       </div>
      </div>
    </div>
  )
}

export default App 