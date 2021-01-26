import React from 'react';

const NameFilter = ( { } ) => {

  //**********************************************************************
  // Render DOM
  //**********************************************************************
  return (
    <div id="namesearch">
      Search for an employee by name:{' '}
      <input
        placeholder="Name ... "
      >
      </input>
    </div>
  )
};

export default NameFilter;