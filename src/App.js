import { useState } from 'react';
import './App.css';
import { Task } from './Task'

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  }

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      isComplete: false
    }
    setToDoList([...toDoList, task]);
    setNewTask('');
  }

  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));
  }

  const completeTask = (id) => {
    setToDoList(toDoList.map((task) => {
      if (task.id === id) {
        console.log(task)
        return {...task, isComplete: true};
      }
      return task;
    }))
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
                    <Task
                      taskName={task.taskName}
                      id={task.id}
                      deleteTask={deleteTask}
                      completeTask={completeTask}
                      isComplete={task.isComplete}
                      key={task.id}
                    />
          )})}
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
