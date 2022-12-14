import React, {useState, useEffect} from "react";
// importing useState from library
import './App.css';
import Form from "./components/form";
import TodoList from "./components/TodoList";

function App() {
   // UseEffect

   
  

  // State stuff
  
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  
  // Input text is actual value and setInputText is function that allows you to change. 
  
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
   }, [todos, status]);


  // Functions Stuff here
    const filterHandler = () => {

      switch(status) {
        case "completed": 
           setFilteredTodos(todos.filter((todo)=> todo.completed === true));
           break;
        
           case "uncompleted": 
            setFilteredTodos(todos.filter((todo) => todo.completed === false));
           break;

           default: 
           setFilteredTodos(todos);

           break;
    }
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Satya's Todo List </h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/> 
    </div>
  );
}

export default App;
