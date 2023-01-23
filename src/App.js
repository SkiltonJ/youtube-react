import { useState } from 'react';
import './App.css';

function App() {
  const planets = [
    { name: 'Mars', isGasPlanet: false },
    { name: 'Earth', isGasPlanet: false },
    { name: 'Jupiter', isGasPlanet: true },
    { name: 'Venus', isGasPlanet: false },
    { name: 'Neptune', isGasPlanet: true },
    { name: 'Uranus', isGasPlanet: true }
  ];

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div className="App">
      <input type='text' onChange={handleInputChange}/>
      <p>{inputValue}</p>
    </div>
  );
}

export default App;
