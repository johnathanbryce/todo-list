import React from "react";
import { isClassExpression } from "typescript";
import classes from "./ToDo.module.css";

function ToDo({
  todo,
  removeTodo,
  editToDo,
  toDoEditing,
  editingText,
  setToDoEditing,
  setEditingText,
}) {
  // lift id to App.js to remove todos
  const handleTodoClick = () => {
    removeTodo(todo.id);
  };

  // lift id and text to App.js to edit todos
  const handleTodoEdit = () => {
    editToDo(todo.id, todo.text);
  };

  return (
    <div className={classes.todo_item}>
      {toDoEditing === todo.id ? (
        <input
          type="text"
          onChange={(e) => setEditingText(e.target.value)}
          value={editingText}
        />
      ) : (
        <p> {todo.text} </p>
      )}

      {/*Hide the checkbox when editing todo */}
      {toDoEditing ? (
        <span></span>
      ) : (
        <label className={classes.checkbox}>
          <input type="checkbox" checked={todo.complete} />
        </label>
      )}

      {toDoEditing === todo.id ? (
        <button
          className={classes.todo_button__submit}
          onClick={handleTodoEdit}
        >
          Submit
        </button>
      ) : (
        <button
          className={classes.todo_button__edit}
          onClick={() => {
            setToDoEditing(todo.id);
          }}
        >
          Edit
        </button>
      )}
      {/* Delete todo item button */}
      <button className={classes.todo_button__delete} onClick={handleTodoClick}>
        Delete
      </button>
    </div>
  );
}

export default ToDo;

/*
checkbox label JSX in case I revert back from a <button> 
 <label className={classes.checkbox}>
        <input type="checkbox" checked={todo.complete} />
  </label>

 */
