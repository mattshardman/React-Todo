import React from 'react';

const styles = {
  form: {
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
  input: {
    padding: '0 20px',
    height: 45,
    outline: 'none',
    border: 'none',
    borderRadius: 2,
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)',
  },
  buttonSection: {
    width: '100%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    height: 40,
    width: 150,
    background: '#eaeaea',
    border: 'none',
    borderRadius: 2,
    fontSize: 12,
    fontWeight: 700,
    outline: 'none',
    cursor: 'pointer',
  },
};

function ToDoForm({
  value, changeHandler, addToDoHandler, removeCompletedHandler,
}) {
  return (
    <form onSubmit={addToDoHandler} style={styles.form}>
      <input
        type="text"
        placeholder="Add a new todo"
        style={styles.input}
        value={value}
        onChange={changeHandler}
      />
      <div style={styles.buttonSection}>
        <button
          type="submit"
          style={styles.button}
        >Add ToDo
        </button>
        <button
          type="button"
          style={styles.button}
          onClick={removeCompletedHandler}
        >
        Remove completed
        </button>
      </div>
    </form>
  );
}

export default ToDoForm;
