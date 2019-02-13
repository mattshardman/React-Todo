import React from 'react';

function ToDoForm({
  value, changeHandler, addToDoHandler, removeCompletedHandler,
}) {
  return (
    <form onSubmit={addToDoHandler}>
      <input
        type="text"
        value={value}
        onChange={changeHandler}
      />
      <button type="submit">Add ToDo</button>
      <button
        type="button"
        onClick={removeCompletedHandler}
      >
        Remove completed
      </button>
    </form>
  );
}

export default ToDoForm;
