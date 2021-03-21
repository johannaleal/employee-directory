import React from "react";
import {FaRegArrowAltCircleDown, FaRegArrowAltCircleUp} from "react-icons/fa";
import "./style.css";

const EmployeeTable = (props) => {

  return (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <table className="table table-striped">
            <thead> 
              <tr>
                <th></th>
                <th>
                  Name&nbsp;
                  {props.sortNameOrder === "asc" 
                  ? 
                    <FaRegArrowAltCircleDown className="sort" onClick={props.sortByName} />
                  :
                    <FaRegArrowAltCircleUp className="sort" onClick={props.sortByName} />
                  }
                </th>
                <th>City</th>
                <th>
                  State&nbsp;
                  {props.sortStateOrder === "asc"
                  ?
                    <FaRegArrowAltCircleDown className="sort" onClick={props.sortByState} />
                  :
                    <FaRegArrowAltCircleUp className="sort" onClick={props.sortByState} />
                  }
                </th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>

            <tbody>
              {props.employees.map(employee => 
                (employee.name.first.toLowerCase().includes(props.search) || 
                employee.name.last.toLowerCase().includes(props.search)) 
                ? <tr key={employee.login.uuid}>
                    <td className="img-col"><img className="img-fluid" src={employee.picture.medium} alt="thumbnail"></img></td>
                    <td>{employee.name.first} {employee.name.last}</td>
                    <td>{employee.location.city}</td>
                    <td>{employee.location.state}</td>
                    <td><a href={"mailto:" + employee.email} target="_blank" rel="noreferrer">{employee.email}</a></td>
                    <td>{employee.phone}</td>
                  </tr>
              : null
              )}
            </tbody>
        </table>
      </div>

      <div className="col-md-1"></div>
    </div>
  );
}

export default EmployeeTable;