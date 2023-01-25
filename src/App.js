import { useState } from 'react';
import './App.css';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  }

  const addTask = () => {
    const newToDoList = [...toDoList, newTask];
    setToDoList(newToDoList);
    setNewTask('');
  }

  const deleteTask = (taskName) => {
    setToDoList(toDoList.filter((task) => task !== taskName));
  }



  return (
      <div className="App">
        <div className='add-task'>
          <input
            value={newTask}
            onChange={handleChange}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className='list'>
          {toDoList.map((task) => {
            return (
              <div>
                <h1>{task}</h1><button onClick={() => deleteTask(task)}>Delete</button>
              </div>
            );
          })}
        </div>
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

// const [count, setCount] = useState(0);

// const increaseClick = () => {
//   setCount(count + 1)
// }

// const decreaseClick = () => {
//   setCount(count - 1)
// }

// const zero = () => {
//   setCount(0)
// }

// return (
//     <div className="App">
//       <button onClick={increaseClick}>Increase</button>
//       <button onClick={decreaseClick}>Decrease</button>
//       <button onClick={zero}>Set to Zero</button>
//       {count}
//     </div>
// );
