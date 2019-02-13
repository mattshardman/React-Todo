import React from 'react';

const ToDoForm = ({ value, changeHandler, addToDoHandler }) => (
  <form onSubmit={addToDoHandler}>
    <input type="text" value={value} onChange={changeHandler} />
    <button type="submit">Add ToDo</button>
    <button type="button" />
  </form>
);

export default ToDoForm;
