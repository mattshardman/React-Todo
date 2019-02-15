import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  toDo: {
    boxSizing: 'border-box',
    background: 'none',
    border: 'none',
    padding: '10px 15px',
    outline: 'none',
    height: 70,
    width: '100%',
    fontSize: 16,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTop: '1px solid #ddd',
    overFlow: 'hidden',
  },
  item: {
    width: 20,
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    border: '1px solid #ddd',
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
      <i className="material-icons" style={{ color: '#0076ff' }}>
        check_circle
      </i>
      )}
    </div>
    <div style={{
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: 40,
    }}
    >
      <p style={{
        textDecoration: taskInfo.completed ? 'line-through' : 'none',
        color: '#484848',
        fontSize: 14,
        fontWeight: 700,
        margin: 0,
      }}
      >{taskInfo.task}
      </p>
      <p style={{
        textDecoration: taskInfo.completed ? 'line-through' : 'none',
        color: '#7c7c7c',
        fontSize: 12,
        fontWeight: 700,
        margin: 0,
      }}
      >{taskInfo.timeAdded}
      </p>
    </div>
  </button>
);

ToDo.propTypes = {
  taskInfo: PropTypes.object.isRequired, //eslint-disable-line
  crossOutTaskHandler: PropTypes.func.isRequired,
};

export default ToDo;
