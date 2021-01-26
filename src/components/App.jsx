import React, { useState, useEffect } from 'react';
import { employee_data } from '../data.js';
import EmpTable from './EmpTable.jsx';
import NameFilter from './NameFilter.jsx';
import DeptFilter from './DeptFilter.jsx';

const App = () => {
  //**********************************************************************
  // Initialize state with hooks
  //**********************************************************************
  const [empList, updateEmpList] = useState(employee_data);
  const [deptList, updateDepartments] = useState([]);
  const [clickedDepts, updateClickedDepts] = useState({});


  //**********************************************************************
  // Use Effect to update department list (using example data)
  //**********************************************************************
  useEffect(() => {
    // Update department list
    const foundDepts = {};

    // Find all departments
    for (const emp of employee_data) {
      if (!foundDepts[emp.department]) {
        foundDepts[emp.department] = 'clicked';
      }
    }

    // Add to React state
    updateDepartments(Object.keys(foundDepts));
    updateClickedDepts(foundDepts);

  }, [employee_data]);


  //**********************************************************************
  // Helper function that actually filters the list
  //**********************************************************************
  const filterList = () => {
    // Filter list
    const updatedList = employee_data.filter(emp => {
      // Check if department is clicked
      if (clickedDepts[emp.department] === 'clicked') {
        return true;
      }
    })

    // Update React state
    updateEmpList(updatedList);
  }

  //**********************************************************************
  // Render DOM
  //**********************************************************************
  return (
    <div id="app">
      <h1>
        Welcome to the Employee App!
      </h1>

      <br/>
      <br/>

      <NameFilter />
      <br/>
      <DeptFilter
        allDepts={deptList}
        clickedDepts={clickedDepts}
        updateClickedDepts={updateClickedDepts}
      />

      <br/>
      <br/>

      <button
        onClick={(e) => {
          console.log(`Clicked. ${JSON.stringify(clickedDepts)}`);
          filterList();
        }}
      >
        Filter!
      </button>

      <br/>

      <h3> Employees: </h3>
      <EmpTable list={empList}/>

    </div>
  )
};

export default App;