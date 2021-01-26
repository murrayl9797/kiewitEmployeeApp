import React from 'react';

const NameFilter = ( { searchName, updateSearchName } ) => {

  //**********************************************************************
  // Render DOM
  //**********************************************************************
  return (
    <div id="namesearch">
      Search for an employee by name:{' '}
      <input
        placeholder="Name ... "
        value={searchName}
        onChange={(e) => {
          updateSearchName(e.target.value);
        }}
      >
      </input>
    </div>
  )
};

export default NameFilter;