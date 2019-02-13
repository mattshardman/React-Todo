import React from 'react';

const ToDo = ({ taskInfo, crossOutTaskHandler }) => (
  <button
    type="button"
    onClick={() => crossOutTaskHandler(taskInfo.id)}
    style={{
      textDecoration: taskInfo.completed ? 'line-through' : 'none',
      background: 'none',
      border: 'none',
      outline: 'none',
    }}
  >
    {taskInfo.task}
  </button>
);

export default ToDo;
