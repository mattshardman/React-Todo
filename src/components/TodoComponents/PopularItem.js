import React from 'react';

function PopularItem({ addToDo, name, img }) {
  return (
    <button
      type="button"
      onClick={e => addToDo(e, name)}
      style={{
        height: 100,
        width: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'none',
        border: 'none',
        outline: 'none',
      }}
    >
      <div style={{
        height: 65,
        width: 65,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url("${img}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      />
      <p style={{ margin: 0, fontSize: 12 }}>
        {name}
      </p>
    </button>
  );
}

export default PopularItem;
