import { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './Pages/Home';
import { Profile } from './Pages/Profile';
import { Navbar } from './Navbar';
import { Contact } from './Pages/Contact';
import { QueryClient, QueryClientProvider} from 'tanstack/react-query';

export const AppContext = createContext();

function App() {
  const client = new QueryClient();
  const [username, setUsername] = useState('Jackson');

  return (
    <div className='App'>
      <QueryClientProvider>
        <AppContext.Provider value={{username, setUsername}}>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home username={username}/>}/>
              <Route path='/profile' element={<Profile />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='*' element={<h1>PAGE NOT FOUND</h1>}/>
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  )
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
// import { Task } from './Task'


// TASK LIST CODE IF NEEDING TO CREATE A NEW TASK LIST

// const [toDoList, setToDoList] = useState([]);
// const [newTask, setNewTask] = useState('');

// const handleChange = (e) => {
//   setNewTask(e.target.value);
// }

// const addTask = () => {
//   const task = {
//     id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
//     taskName: newTask,
//     isComplete: false
//   }
//   setToDoList([...toDoList, task]);
//   setNewTask('');
// }

// const deleteTask = (id) => {
//   setToDoList(toDoList.filter((task) => task.id !== id));
// }

// const completeTask = (id) => {
//   setToDoList(toDoList.map((task) => {
//     if (task.id === id) {
//       console.log(task)
//       return {...task, isComplete: true};
//     }
//     return task;
//   }))
// }

// return (
//     <div className="App">
//       <div className='add-task'>
//         <input
//           value={newTask}
//           onChange={handleChange}
//         />
//         <button onClick={addTask}>Add Task</button>
//       </div>
//       <div className='list'>
//         {toDoList.map((task) => {
//           return (
//                   <Task
//                     taskName={task.taskName}
//                     id={task.id}
//                     deleteTask={deleteTask}
//                     completeTask={completeTask}
//                     isComplete={task.isComplete}
//                     key={task.id}
//                   />
//         )})}
//       </div>
//     </div>
// );

//  CAT FACT API CALL
// const [catFact, setCatFact] = useState('');

// const fetchCatFact = () => {
//   fetch('https://catfact.ninja/fact')
//     .then((result) => result.json())
//     .then((data) => {
//       setCatFact(data.fact);
//   });
// }

// useEffect(() => {
//   fetchCatFact();
// }, []);

// return (
//   <div>
//     <button onClick={fetchCatFact}>Generate Cat Fact</button>
//     <p> {catFact} </p>
//   </div>
// )

// CALL PREDICTED AGE API
// const [predictedAge, setPredictedAge] = useState(null);
// const [name, setName] = useState('');

// const fetchData = () => {
//   fetch(`https://api.agify.io/?name=${name}`)
//     .then((result) => result.json())
//     .then((data) => {
//       setPredictedAge(data);
//     });
// }
// return (
//   <div>
//     <input
//       placeholder='Write name here...'
//       onChange={(e) => {
//         setName(e.target.value);
//       }}
//     />
//     <button onClick={fetchData}>Predict Age</button>
//     <h1>Predicted Age: {predictedAge?.age}</h1>
//   </div>
// )

// EXCUSE API CALL
// const [generatedExcuse, setGeneratedExcuse] = useState('')

// const fetchExcuse = (occaison) => {
//   fetch(`https://excuser-three.vercel.app/v1/excuse/${occaison}/`)
//   .then((result) => result.json())
//   .then((data) => {
//     setGeneratedExcuse(data[0].excuse)
//   });
// }

// return (
//   <div>
//     <button onClick={() => fetchExcuse('party')}>Party</button>
//     <button onClick={() => fetchExcuse('family')}>Family</button>
//     <button onClick={() => fetchExcuse('office')}>Office</button>
//     <div>
//       <h1>{generatedExcuse}</h1>
//     </div>
//   </div>
// )
