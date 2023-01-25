import { useState } from 'react';
import './App.css';

function App() {
  const [textColor, setTextColor] = useState('red');

  const handleClick = () => {
    setTextColor(textColor === 'red' ? 'black' : 'red')
  }

  return (
    <div className="App">
      <button style={{color: textColor}} onClick={handleClick}>Show/Hide</button>
    </div>
  );
}

export default App;
