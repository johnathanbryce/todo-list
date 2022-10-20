import React from "react";
import ToDo from "./ToDo";
import classes from "./ToDoList.module.css";

function ToDoList({
  todos,
  removeTodo,
  editToDo,
  toDoEditing,
  editingText,
  setToDoEditing,
  setEditingText,
}) {
  //TODO -- How do I display/send this properly via the ToDo child component?

  let childArray = [];
  for (let i = 0; i < todos.length; i++) {
    childArray = [
      ...childArray,
      <ToDo
        key={todos[i].id}
        todo={todos[i].text}
        completed={todos[i].completed}
        removeTodo={removeTodo}
      />,
    ];
  }

  return (
    <div className={classes.list_container}>
      {/*TODO -- pass this custom map to ToDo.js */}
      {/*console.log(childArray)*/}

      {todos.map((todo) => {
        return (
          <ToDo
            key={todo.id}
            todo={todo}
            completed={todo.completed}
            removeTodo={removeTodo}
            editToDo={editToDo}
            toDoEditing={toDoEditing}
            editingText={editingText}
            setToDoEditing={setToDoEditing}
            setEditingText={setEditingText}
          />
        );
      })}
    </div>
  );
}

export default ToDoList;

/*

OLD MAP CODE 

    <div className={classes.list_container}>
      {todos.map((todo) => {
        return (
          <ToDo
            key={todo.id}
            todo={todo}
            completed={todo.completed}
            removeTodo={removeTodo}
          />
        );
      })}
    </div>



*/
