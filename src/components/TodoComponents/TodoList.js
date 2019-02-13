// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo';

function TodoList({ toDos, crossOutTaskHandler }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'column',
      textAlign: 'left',
      width: '40%',
    }}
    >
      { toDos.map(toDo => (
        <ToDo
          taskInfo={toDo}
          crossOutTaskHandler={crossOutTaskHandler}
        />
      ))}
    </div>
  );
}

export default TodoList;
