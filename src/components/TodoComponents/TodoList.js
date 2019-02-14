import React from 'react';
import PropTypes from 'prop-types';
import ToDo from './Todo';

function TodoList({ toDos, crossOutTaskHandler }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'column',
      textAlign: 'left',
      width: '100%',
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

TodoList.propTypes = {
  toDos: PropTypes.array.isRequired, //eslint-disable-line
  crossOutTaskHandler: PropTypes.func.isRequired,
};

export default TodoList;
