import React from 'react';
import DeptRow from './DeptRow.jsx';

const DeptFilter = ( { allDepts, clickedDepts, updateClickedDepts } ) => {
  //**********************************************************************
  // Helper function to update departments to filter by
  //**********************************************************************
  const toggleDept = (department, flipIt) => {

    // Check if checkbox is clicked or unclicked
    if (clickedDepts[department] === 'unclicked') {
      clickedDepts[department] = 'clicked';
    } else {
      clickedDepts[department] = 'unclicked';
    }

    // Update React state
    updateClickedDepts(clickedDepts);
    flipIt(); // Invokes flipChecked
   }

  //**********************************************************************
  // Render DOM
  //**********************************************************************
  return (
    <div>
      {allDepts.map((deptStr, ind) => {
        return (
          <DeptRow
            key={ind}
            dept={deptStr}
            clickedDepts={clickedDepts}
            updateClickedDepts={updateClickedDepts}
            toggleDept={toggleDept}
          />
        );
      })}
    </div>
  )
};

export default DeptFilter;