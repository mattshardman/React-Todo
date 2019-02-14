import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
  input: {
    padding: '0 20px',
    fontSize: 14,
    height: 45,
    outline: 'none',
    borderRadius: 8,
    border: '1px #ddd solid',
  },
  buttonSection: {
    width: '100%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    height: 40,
    width: 150,
    background: 'linear-gradient(top,#f5f5f5,#f1f1f1)',
    color: '#757575',
    border: '#f5f5f5 solid 1px',
    borderRadius: 2,
    fontSize: 12,
    fontWeight: 700,
    outline: 'none',
    cursor: 'pointer',
    transition: 'color 400ms, border 400ms',
    ':hover': {
      color: '#000',
      border: '1px solid #c6c6c6',
    },
  },
});

function ToDoForm({
  value, changeHandler, addToDoHandler, removeCompletedHandler,
}) {
  return (
    <form onSubmit={addToDoHandler} className={css(styles.form)}>
      <input
        type="text"
        placeholder="Add a new todo..."
        className={css(styles.input)}
        value={value}
        onChange={e => changeHandler(e, 'currentFormValue')}
      />
      <div className={css(styles.buttonSection)}>
        <button
          type="submit"
          className={css(styles.button)}
        >
          Add ToDo
        </button>
        <button
          type="button"
          className={css(styles.button)}
          onClick={removeCompletedHandler}
        >
          Remove completed
        </button>
      </div>
    </form>
  );
}

ToDoForm.propTypes = {
  value: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  addToDoHandler: PropTypes.func.isRequired,
  removeCompletedHandler: PropTypes.func.isRequired,
};

export default ToDoForm;
