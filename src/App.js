import { useState } from 'react';
import './App.css';

function App() {
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
