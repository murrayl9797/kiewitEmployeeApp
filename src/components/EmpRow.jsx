import React from 'react';

const EmpRow = ( { empObj } ) => {

  //**********************************************************************
  // Render DOM
  //**********************************************************************
  return (
    <tr>
      <td> {empObj.name} </td>
      <td> {empObj.department} </td>
      <td> {empObj.age} </td>
    </tr>
  )
};

export default EmpRow;