import React from 'react';
import EmpRow from './EmpRow.jsx';

const EmpTable = ( { list } ) => {

  //**********************************************************************
  // Render DOM
  //**********************************************************************
  return (
    <table>
      <thead>
        <tr>
          <th> Name </th>
          <th> Department </th>
          <th> Age </th>
        </tr>
      </thead>

      <tbody>
        {list.map((obj, ind) => {
          return <EmpRow key={ind} empObj={obj}/>;
        })}
      </tbody>
    </table>
  )
};

export default EmpTable;