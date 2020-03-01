import React from "react";

function EmployeeData(props) {
  return (
    <table class="data" id="employeeData">
      <thead>
        <tr>
          <th scope="col" onClick={() => props.idSort(props.id)}>
            #
          </th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Department</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}

export default EmployeeData;
