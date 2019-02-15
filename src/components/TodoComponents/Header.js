import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  header: {
    boxSizing: 'border-box',
    width: '100%',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    padding: '0 2.5%',
    position: 'fixed',
    background: '#fff',
  },
  form: {
    boxSizing: 'border-box',
    width: '100%',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchWrapper: {
    boxSizing: 'border-box',
    background: '#fff',
    width: '100%',
    display: 'flex',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 0,
    left: 0,
  },
  input: {
    width: '60%',
    border: 'none',
    outline: 'none',
    fontSize: 16,
    height: 20,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    color: '#484848',
    ':hover': {
      color: 'black',
    },
  },
});

const Header = ({
  searchHandler, changeHandler, clearSearch, value,
}) => {
  const [search, setSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollHeight = window.scrollY;
      console.log(scrollHeight);
      if (scrollHeight > 0) {
        return setScrolled(true);
      }
      return setScrolled(false);
    });
  });
  return (
    <header className={css(styles.header)} style={{ borderBottom: scrolled ? '1px #ddd solid' : 'none' }}>
      { search
      && (
      <form
        onSubmit={searchHandler}
        className={css(styles.form)}
      >
        <div className={css(styles.searchWrapper)}>
          <button
            type="button"
            className={css(styles.button)}
            onClick={() => setSearch(state => !state)}
          >
            <i className="material-icons" style={{ fontSize: 20 }}>
               arrow_back
            </i>
          </button>
          <input
            type="text"
            value={value}
            onChange={e => changeHandler(e, 'searchValue')}
            placeholder="Search here..."
            className={css(styles.input)}
          />
          <button
            type="submit"
            className={css(styles.button)}
            onClick={searchHandler}
          >
            <i className="material-icons" style={{ fontSize: 20 }}>
                search
            </i>
          </button>
          <button
            type="button"
            className={css(styles.button)}
            onClick={clearSearch}
          >
            <i className="material-icons" style={{ fontSize: 20 }}>
                close
            </i>
          </button>
        </div>
      </form>
      )
        }
      { !search && (
      <div style={{
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      >
        <button
          type="button"
          className={css(styles.button)}
          onClick={() => setSearch(state => !state)}
        >
          <i className="material-icons" style={{ fontSize: 20 }}>
                search
          </i>
        </button>
        <h1 style={{ fontSize: 20, color: '#0076ff' }}>ToDo</h1>
        <div style={{ width: 20 }} />
      </div>
      )}

    </header>
  );
};

Header.propTypes = {
  toDos: PropTypes.array.isRequired, //eslint-disable-line
  searchHandler: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Header;
