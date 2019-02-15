import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PopularItem from './PopularItem';

const styles = StyleSheet.create({
  scrollSection: {
    boxSizing: 'border-box',
    width: '100%',
    height: 120,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'left',
    margin: '10px 0',
    overflow: 'scroll',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

function Popular({ addToDo }) {
  return (
    <div style={{ width: '100%' }}>
      <div style={{
        fontSize: 20,
        width: '95%',
        boxSizing: 'border-box',
        margin: '0 auto',
      }}
      >
        <h1 style={{ fontSize: 20 }}>Popular</h1>
      </div>
      <div className={css(styles.scrollSection)}>
        <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          {[{ name: 'Yoga', img: 'https://image.flaticon.com/icons/svg/1028/1028338.svg' },
            { name: 'Gym', img: 'https://image.flaticon.com/icons/svg/204/204244.svg' },
            { name: 'Reading', img: 'https://image.flaticon.com/icons/svg/201/201571.svg' },
            { name: 'Music', img: 'https://image.flaticon.com/icons/svg/148/148726.svg' },
            { name: 'Cooking', img: 'https://image.flaticon.com/icons/svg/135/135678.svg' },
            { name: 'Meditation', img: ' https://image.flaticon.com/icons/svg/432/432283.svg' },
            { name: 'Language', img: 'https://image.flaticon.com/icons/svg/1070/1070554.svg' }]
            .map(each => (
              <PopularItem
                addToDo={addToDo}
                {...each}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Popular;
