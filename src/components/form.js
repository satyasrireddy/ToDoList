import React from "react";

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) =>{
  // I can write anything like js
   const inputTextHandler = (e) => {
    // e is event. event tells us what had happend in the input. 
    console.log(e.target.value);
    setInputText(e.target.value);
   };

   const submitTodoHandler = (e) => {
    e.preventDefault();
    // stoping not refreshing the page because when we click on + it is refreshing by iteself.
     // we need to set the do's here
     setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000 }]);
      // we have the piece of state and we created an object

      setInputText(" ");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick = {submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler}name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form;