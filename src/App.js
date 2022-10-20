import React, { useState, useEffect } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";

const App = () => {
  // input text for todos
  const [toDoInput, setToDoInput] = useState("");
  // list of todos to display
  const [todos, setTodos] = useState([]);

  // edit  todos
  const [toDoEditing, setToDoEditing] = useState(null);
  const [editingText, setEditingText] = useState(" ");

  const submitHandler = (e) => {
    e.preventDefault();

    // prevent blank and short submissions
    if (toDoInput.length === 0 || toDoInput.length === 2) {
      alert("Your todo input is too short!");
      return;
    }
    // prevent long submissions
    if (toDoInput.length > 40) {
      alert("Your todo input is too long!");
      return;
    }

    // TODO -- replace the alerts with CSS modifications to the input field and hide the "Add To Do" button

    // create a new to-do object to update todos state
    const newToDo = {
      id: new Date().getTime(),
      text: toDoInput,
      completed: false,
    };
    // adds the new to-do object to the displayed list
    setTodos([...todos, newToDo]);
    setToDoInput("");
  };

  const inputChangeHandler = (e) => {
    setToDoInput(e.target.value);
  };

  const removeTodo = (id) => {
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
  const editToDo = (id) => {
    const updatedToDos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo; // returns every todo
    });

    setTodos(updatedToDos);

    setToDoEditing(null);
    setEditingText("");
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
