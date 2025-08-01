import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"style={{backgroundColor: color}}>
      <div className="fixed flex  flex-wrap  justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none bg-red-500 text-white px-4 py-1 rounded-full" 
          onClick={() => setColor("red")}>Red</button>
          <button className="outline-none bg-blue-500 text-white px-4 py-1 rounded-full"
          onClick={() => setColor("blue")}>Blue</button>
          <button className="outline-none bg-green-500 text-white px-4 py-1 rounded-full"
          onClick={() => setColor("green")}>Green</button>
          <button className="outline-none bg-yellow-500 text-white px-4 py-1 rounded-full"
          onClick={() => setColor("yellow")}>Yellow</button>
          <button className="outline-none bg-orange-500 text-white px-4 py-1 rounded-full"
          onClick={() => setColor("orange")}>Orange</button>
          <button className="outline-none bg-purple-500 text-white px-4 py-1 rounded-full"
          onClick={() => setColor("purple")}>Purple</button>
          <button className="outline-none bg-pink-500 text-white px-4 py-1 rounded-full"
          onClick={() => setColor("pink")}>Pink</button>
          <button className="outline-none bg-gray-500 text-white px-4 py-1 rounded-full"
          onClick={() => setColor("gray")}>Gray</button>
          <button className="outline-none bg-black text-white px-4 py-1 rounded-full"
          onClick={() => setColor("black")}>Black</button>  
        </div>
      </div>
    </div>
  )
}

export default App