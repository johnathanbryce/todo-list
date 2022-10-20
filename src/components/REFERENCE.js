import React, { useState } from "react";

const REFERENCE = () => {
  // list of todos to display
  const [toDos, setToDos] = useState([]);

  // input text for todos
  const [toDoInput, setToDoInput] = useState(" ");

  // edit/change todos
  const [toDoEditing, setToDoEditing] = useState(null);
  const [editingText, setEditingText] = useState(" ");

  const inputChangeHandler = (e) => {
    setToDoInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // prevents addition of todos with char length <1
    if (toDoInput.length === 0 || toDoInput.length === 1) {
      return;
    }

    // create a new to-do object
    const newToDo = {
      id: new Date().getTime(),
      text: toDoInput,
      completed: false,
    };

    // adds the new to-do object to the displayed list
    setToDos([...toDos, newToDo]);
    setToDoInput(" ");
  };

  const removeToDoItem = (id) => {
    const updatedToDos = toDos.filter((todo) => todo.id !== id);
    setToDos(updatedToDos);
  };

  const editToDo = (id) => {
    const updatedToDos = [...toDos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo; // returns every todo
    });
    setToDos(updatedToDos);
    setToDoEditing(null);
    setEditingText(" ");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={inputChangeHandler} value={toDoInput} />
        <button type="submit"> Add To Do </button>
      </form>
      <div>
        {toDos.map((todo) => (
          <div key={todo.id}>
            {toDoEditing === todo.id ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
                value={editingText}
              />
            ) : (
              <div> {todo.text} </div>
            )}

            <div>
              <button onClick={() => removeToDoItem(todo.id)}>Remove</button>

              {toDoEditing === todo.id ? (
                <button onClick={() => editToDo(todo.id)}>Submit Edits</button>
              ) : (
                <button
                  onClick={() => {
                    setToDoEditing(todo.id);
                  }}
                >
                  Edit Note
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default REFERENCE;
