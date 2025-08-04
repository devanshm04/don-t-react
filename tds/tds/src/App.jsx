import { useState, useRef } from "react";
import "./App.css";
import bottle from "./assets/bottle.avif";

function App() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [angle, setAngle] = useState(0);
  const [selectedName, setSelectedName] = useState(null);
  const intervalRef = useRef(null);
  const bottleRef = useRef(null);

  const names = ["Devansh", "Ayush", "Suraj", "Akshat", "Neeraj", "Raj"];
  const anglePerPerson = 360 / names.length;

  const startSpin = () => {
    if (isSpinning) return;

    setSelectedName(null);
    setIsSpinning(true);

    intervalRef.current = setInterval(() => {
      setAngle((prev) => prev + anglePerPerson); // Constant rotation speed
    }, 50);
  };

  const stopSpin = () => {
    if (!isSpinning) return;

    clearInterval(intervalRef.current);

    const targetIndex = Math.floor(Math.random() * names.length);
    const targetName = names[targetIndex];
    setSelectedName(targetName);
  }
  
  
  
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-6 bg-gray-100">
      <div className="h-40 w-40">
        <img
          ref={bottleRef}
          className="h-full w-full transition-transform duration-50 ease-linear"
          src={bottle}
          alt="bottle"
          style={{ transform: `rotate(${angle}deg)` }}
        />
      </div>
      <div className="flex space-x-4">
        <button
          onClick={startSpin}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Start
        </button>
        <button
          onClick={stopSpin}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Stop
        </button>
      </div>
      {selectedName && (
        <div className="text-xl text-gray-700 font-semibold">
          Selected: <span className="text-blue-600">{selectedName}</span>
        </div>
      )}
    </div>
  );

}
export default App;
