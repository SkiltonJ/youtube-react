export const Task = (props) => {
  return (
    <div style={{backgroundColor: props.isComplete ? 'green' : 'white'}}>
      <h1>{props.taskName}</h1>
      <button onClick={() => props.deleteTask(props.id)}>Delete</button>
      <button onClick={() => props.completeTask(props.id)}>Completed</button>
    </div>
  );
}
