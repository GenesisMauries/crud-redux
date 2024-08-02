import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <h1>CRUD de Tareas</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;