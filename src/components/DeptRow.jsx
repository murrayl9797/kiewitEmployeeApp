import React, { useState } from 'react';

const DeptRow = ( { dept, clickedDepts, updateClickedDepts, toggleDept } ) => {

  //**********************************************************************
  // This React state is needed to start checkboxes as checked
  //**********************************************************************
  const [isChecked, updateChecked] = useState(true);

  const flipChecked = () => {
    isChecked ? updateChecked(false) : updateChecked(true);
  };

  //**********************************************************************
  // Render DOM
  //**********************************************************************
  return (
    <div>
      <input
        type="checkbox"
        name={dept}
        value={dept}
        checked={isChecked}
        onChange={() => {
          // Update department filter and flip 'isChecked' variable
          toggleDept(dept, flipChecked);
        }}
      ></input>
      <label htmlFor={dept}> {dept} </label>
      <br/>
    </div>
  )
};

export default DeptRow;