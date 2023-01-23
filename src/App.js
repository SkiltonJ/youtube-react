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

  const [showText, setShowText] = useState(true);

  const handleClick = (e) => {
    setShowText(!showText)
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Show/Hide</button>
      {showText === true && <h1>Hi my name is Jackson</h1>}
    </div>
  );
}

export default App;
