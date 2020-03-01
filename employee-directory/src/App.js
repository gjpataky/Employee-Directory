import React, { Component } from "react";
import EmployeeData from "./components/EmployeeData";
import EmployeeInfo from "./components/EmployeeInfo";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employee.json";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees
  };

  // Sort id
  idSort = id => {
    const employees = this.state.employees.sort(function(a, b) {
      return b.id - a.id;
    });
    this.setState({ employees });
  };

        this.setState({ employees });
  };

  // Map over this.state.employees and render a EmployeeTable component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <div>Sort ID's in descending order by clicking ID table header</div>
        
        <EmployeeData idSort={this.idSort}>
          {this.state.employees.map(employee => (
            <EmployeeData
              id={employee.id}
              firstName={employee.firstName}
              lastName={employee.lastName}
              email={employee.email}
              phone={employee.phone}
            />
          ))}
        </EmployeeData>
      </Wrapper>
    );
  }
}

export default App;
