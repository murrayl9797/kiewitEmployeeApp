import React, { useState, useEffect } from 'react';
import { employee_data } from '../data.js';
import EmpTable from './EmpTable.jsx';
import NameFilter from './NameFilter.jsx';
import DeptFilter from './DeptFilter.jsx';
import AgeFilter from './AgeFilter.jsx';


const App = () => {
  //**********************************************************************
  // Initialize state with hooks
  //**********************************************************************

  // State for employee lists
  const [empList, updateEmpList] = useState(employee_data);

  // State used for all departments and those clicked
  const [deptList, updateDepartments] = useState([]);
  const [clickedDepts, updateClickedDepts] = useState({});

  // State for age filters
  const [lowerAge, updateLowerAge] = useState(0);
  const [upperAge, updateUpperAge] = useState(120);

  // State for name filters
  const [searchName, updateSearchName] = useState('');


  //**********************************************************************
  // useEffect to update department list (using example data)
  //**********************************************************************
  //Modularize for use elsewhere if need be
  const initDepts = () => {
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
  }

  useEffect(() => {
    // Initialize departments on page mount
    initDepts();
  }, [employee_data]);


  //**********************************************************************
  // Helper function that actually filters the list
  //**********************************************************************
  const filterList = () => {
    // Check to ensure ages are valid
    if (isNaN(lowerAge) || isNaN(upperAge)) {
      alert('Please input valid numbers for age parameters');
      return;
    } else if (Number(lowerAge) > Number(upperAge)) {
      alert('Please ensure lower age is less than or equal to upper age');
      return;
    }

    // Filter list
    const updatedList = employee_data.filter(emp => {
      // Check if department is clicked
      if (clickedDepts[emp.department] === 'clicked') {

        // Check if valid age
        if (lowerAge <= emp.age && upperAge >= emp.age) {

          // Check if name is being search as well
          if (searchName.length === 0 || emp.name.includes(searchName)) {

            return true;
          }
        }
      }
    })

    // Update React state
    updateEmpList(updatedList);
  }


  //**********************************************************************
  // Render DOM
  //**********************************************************************
  return (
    <div className='app'>
      {/*********** Some Basic Headers ***********/}
      <h1>
        Welcome to Liam's Employee App!
      </h1>


      <h3> Filter Parameters: </h3>

      <br/>

      {/*********** Filtering functionality ***********/}
      <div className='filters'>
        <NameFilter
          searchName={searchName}
          updateSearchName={updateSearchName}
        />
        <br/>
        <AgeFilter
          lowerAge={lowerAge}
          upperAge={upperAge}
          updateLowerAge={updateLowerAge}
          updateUpperAge={updateUpperAge}
        />
        <br/>
        <DeptFilter
          allDepts={deptList}
          clickedDepts={clickedDepts}
          updateClickedDepts={updateClickedDepts}
        />
      </div>

      <br/>

      {/*********** Button that actually filters ***********/}
      <button
        onClick={(e) => {
          // Filter the list when this button is clicked
          filterList();
        }}
      >
        Filter!
      </button>

      <br/>

      {/*********** Employee Table ***********/}
      <h3> Employees: </h3>
      <EmpTable list={empList}/>

    </div>
  )
};

export default App;