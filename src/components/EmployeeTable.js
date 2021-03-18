import React from "react";

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
              <th>Zip Code</th>
              <th>Country</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
        </thead>
        <tbody>
          {props.employees.map(employee => (
              <tr>
                <td><img class="rounded img-fluid" src={employee.picture.thumbnail} alt="thumbnail"></img></td>
                <td>{employee.name.first} {employee.name.last}</td>
                <td>{employee.location.city}</td>
                <td>{employee.location.state}</td>
                <td>{employee.location.postcode}</td>
                <td>{employee.location.country}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
              </tr>
            ))}
        </tbody>
    </table>
  );
}

export default EmployeeTable;
