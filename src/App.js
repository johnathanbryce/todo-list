import React, { useState, useEffect } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";

const App = () => {
  // input text for todos
  const [toDoInput, setToDoInput] = useState(" ");
  // list of todos to display
  const [todos, setTodos] = useState([]);

  // update & edit todos
  const [toDoEditing, setToDoEditing] = useState(null);
  const [editingText, setEditingText] = useState(" ");

  const removeTodo = (id) => {
    /* references for custom filter:    
    
    https://dev.to/felipepaz/creating-a-custom-array-prototype-filter-in-javascript-2nkc  
    https://www.youtube.com/watch?v=7-oIxkcAkHs
    */

    //this will be the new todos state to be eventuall set via setToDos()
    let filtered = [];
    // loop through each todo item
    for (let i = 0; i < todos.length; i++) {
      // push todos to filtered where the returned id !== the specific todo
      if (id !== todos[i].id) {
        filtered.push(todos[i]);
      }
    }
    setTodos(filtered);

    /*  IGNORE -- code using .filter()
    const updatedToDos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedToDos);
    */
  };

  // Edit the selected to do item
  const editToDo = (id, text) => {
    console.log(id, text);
    const updatedToDos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo; // returns every todo
    });
    console.log(updatedToDos);
    setTodos(updatedToDos);
    setToDoEditing(null);
    setEditingText(" ");
  };

  const inputChangeHandler = (e) => {
    setToDoInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // prevent blank submissions & submissions with only 1 characters
    if (toDoInput.length === 0 || toDoInput.length === 1) {
      return;
    }

    // create a new to-do object to update todos state
    const newToDo = {
      id: new Date().getTime(),
      text: toDoInput,
      completed: false,
    };

    // adds the new to-do object to the displayed list
    setTodos([...todos, newToDo]);
    setToDoInput(" ");
  };

  return (
    <div>
      <h1> My Todo List</h1>
      <div class="container">
        <div class="container_input">
          <input
            class="container_input_text"
            type="text"
            placeholder="add a todo item!"
            onChange={inputChangeHandler}
            value={toDoInput}
          />
          <button onClick={submitHandler}> Add To Do </button>
        </div>

        <ToDoList
          todos={todos}
          removeTodo={removeTodo}
          editToDo={editToDo}
          toDoEditing={toDoEditing}
          editingText={editingText}
          setToDoEditing={setToDoEditing}
          setEditingText={setEditingText}
        />
      </div>
    </div>
  );
};

export default App;
