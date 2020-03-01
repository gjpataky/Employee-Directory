import React from "react";

function EmployeeInfo(props) {
  return (
    <>
      <tr>
        <th scope="row">{props.id}</th>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.department}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.department}</td>
      </tr>
    </>
  );
}

export default EmployeeInfo;
