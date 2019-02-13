import React from 'react';

const ToDoForm = ({ value, changeHandler, addToDoHandler }) => (
  <form>
    <input type="text" value={value} onChange={changeHandler} />
    <button type="button" onClick={addToDoHandler}>Add ToDo</button>
    <button type="button" />
  </form>
);

export default ToDoForm;
