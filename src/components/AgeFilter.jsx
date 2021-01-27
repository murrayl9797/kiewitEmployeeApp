import React from 'react';

const AgeFilter = ( { lowerAge, updateLowerAge, upperAge, updateUpperAge } ) => {
  //**********************************************************************
  // Helper function to update departments to filter by
  //**********************************************************************


  //**********************************************************************
  // Render DOM
  //**********************************************************************
  return (
    <div>
      Lower Bound Age:{' '}
      <input
        value={lowerAge}
        onChange={(e) => {
          updateLowerAge(e.target.value);
        }}
      >
      </input>

      <br/>

      Upper Bound Age:{' '}
      <input
        value={upperAge}
        onChange={(e) => {
          updateUpperAge(e.target.value);
        }}
      >
      </input>
    </div>
  )
};

export default AgeFilter;