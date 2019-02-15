import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  wrapper: {
    boxSizing: 'border-box',
    width: '100%',
    padding: '0 15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

function SearchHeading() {
  return (
    <div style={{ width: 600, maxWidth: '100%' }}>
      <div
        className={css(styles.wrapper)}
      >
        <p>My todo list</p>

      </div>
    </div>
  );
}

export default SearchHeading;
