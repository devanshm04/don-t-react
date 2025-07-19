import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [count, setCount] = useState(0)

    const decValue = () =>{
      if(count > -5)
       setCount(count-1)
    }
    const addValue = () => {
      if(count < 20)
      setCount(count+1)
    }
  return (
    <>
       <h1>Counter</h1>
       <h2>Count is : {count}</h2>

       <button onClick={addValue}
       >Increase count</button> 
         <br/>
       <button
       onClick={decValue}
       >Decrease count</button>
      
    </>
  )
}

export default App
