import React from 'react';
import PropTypes from 'prop-types';

function SearchHeading({
  toDos, searchHandler, changeHandler, clearSearch, value, //eslint-disable-line
}) {
  return (
    <div style={{ width: 600, maxWidth: '100%' }}>
      <form
        onSubmit={searchHandler}
        style={{
          width: '100%',
          borderBottom: '1px #eaeaea solid',
          marginBottom: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p>My ToDos</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input
            type="text"
            value={value}
            onChange={e => changeHandler(e, 'searchValue')}
            placeholder="Search here..."
            style={{
              height: 30,
              width: 120,
              border: 'none',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: 'none',
              outline: 'none',
            }}
          >
            <i className="material-icons" style={{ fontSize: 14, color: '#484848' }}>
                search
            </i>
          </button>
          <button
            type="button"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: 'none',
              outline: 'none',
            }}
            onClick={clearSearch}
          >
            <i className="material-icons" style={{ fontSize: 14, color: '#484848' }}>
                close
            </i>
          </button>
        </div>
      </form>
    </div>
  );
}

SearchHeading.propTypes = {
  toDos: PropTypes.array.isRequired, //eslint-disable-line
  searchHandler: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchHeading;
