import React, {useState, useEffect} from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import ToDoList from './components/ToDoList';


function App() {
  //run once when the app starts
  useEffect(() => {
    getLocalStore();
  }, []);


  //states
  const [inputText, setinputText] = useState("");
  const [todos, settodos] = useState([]);
  const [status, setstatus] = useState('all');
  const [filteredTodos, setfilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
    saveToLocalStore();
  }, [todos,status]);

  //functions
  const filterHandler = () =>{
    switch(status){
      case "completed":
        setfilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case "uncompleted":
          setfilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setfilteredTodos(todos);
    }
  }

  //save to local storage
  const saveToLocalStore = () =>{
      localStorage.setItem("todos",JSON.stringify(todos));
  };

  const getLocalStore = () =>{
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]));
    }
    else{
      let localTodos= JSON.parse(localStorage.getItem("todos"));
      settodos(localTodos);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Marium's To Do List</h1>
      </header>
      {/* send setinputText as a prop to form */}
      <Form inputText={inputText} todos={todos} settodos={settodos} setinputText={setinputText} setstatus={setstatus}/>
      <ToDoList settodos={settodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
