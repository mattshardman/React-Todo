import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  toDo: {
    background: 'none',
    border: 'none',
    outline: 'none',
    height: 50,
    fontSize: 16,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  item: {
    width: 20,
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    border: '1px solid #eaeaea',
    marginRight: 20,
  },
};

const ToDo = ({ taskInfo, crossOutTaskHandler }) => (
  <button
    type="button"
    onClick={() => crossOutTaskHandler(taskInfo.id)}
    style={{ ...styles.toDo, display: taskInfo.display ? 'flex' : 'none' }}
  >
    <div style={styles.item}>
      { taskInfo.completed && (
      <i className="material-icons">
check_circle
      </i>
      )}
    </div>
    <p style={{
      textDecoration: taskInfo.completed ? 'line-through' : 'none',
      color: '#484848',
    }}
    >{taskInfo.task}
    </p>
  </button>
);

ToDo.propTypes = {
  taskInfo: PropTypes.object.isRequired, //eslint-disable-line
  crossOutTaskHandler: PropTypes.func.isRequired,
};

export default ToDo;
