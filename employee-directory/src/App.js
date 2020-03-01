import React, { Component } from "react";
import EmployeeData from "./components/EmployeeData";
import EmployeeInfo from "./components/EmployeeInfo";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employee.json";

class App extends Component {
  state = {
    employees
  };

  // Sorting
  idSort = id => {
    const employees = this.state.employees.sort(function(a, b) {
      return b.id - a.id;
    });
    this.setState({ employees });
  };


render(){
return (
  <Wrapper>
    <Title>Employee Directory</Title>
    <div>Sort ID's in descending order by clicking on header</div>

    <EmployeeData idSort={this.idSort}>
      {this.state.employees.map(employee => (
        <EmployeeInfo
          id={employee.id}
          name={employee.name}
          department={employee.department}
          email={employee.email}
          phone={employee.phone}
          location={employee.location}
        />
      ))}
    </EmployeeData>
  </Wrapper>
);
}
   
export default App;
