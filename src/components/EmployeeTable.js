import React from "react";
import "./style.css";

function EmployeeTable(props) {
  console.log("this is props", props.employees)
  return (
    <table>
        <thead> 
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>City</th>
              <th>State</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
        </thead>
        <tbody>
          {props.employees.map(employee => (
              <tr key={employee.login.uuid}>
                <td><img className="img-fluid" src={employee.picture.medium} alt="thumbnail"></img></td>
                <td>{employee.name.first} {employee.name.last}</td>
                <td>{employee.location.city}</td>
                <td>{employee.location.state}</td>
                <td><a href={"mailto:" + employee.email} target="_blank" rel="noreferrer">{employee.email}</a></td>
                <td>{employee.phone}</td>
              </tr>
            ))}
        </tbody>
    </table>
  );
}

export default EmployeeTable;
