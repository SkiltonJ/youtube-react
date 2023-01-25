import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
      <div className="App">
        <button>Increase</button>
        <button>Decrease</button>
        <button>Set to Zero</button>
      </div>
  );
}

export default App;

// const [textColor, setTextColor] = useState('red');

// const handleClick = () => {
//   setTextColor(textColor === 'red' ? 'black' : 'red')
// }

// return (
//   <div className="App">
//     <button style={{color: textColor}} onClick={handleClick}>Show/Hide</button>
//   </div>
// );
