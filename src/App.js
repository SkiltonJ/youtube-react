import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increaseClick = () => {
    setCount(count + 1)
  }

  const decreaseClick = () => {
    setCount(count - 1)
  }

  const zero = () => {
    setCount(0)
  }

  return (
      <div className="App">
        <button onClick={increaseClick}>Increase</button>
        <button onClick={decreaseClick}>Decrease</button>
        <button onClick={zero}>Set to Zero</button>
        {count}
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
