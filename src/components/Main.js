import React, { Component } from 'react';
import API from "../utils/API";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeTable from "./EmployeeTable"

export default class Main extends Component {

    state = {
        employees: [],
        sortOrder: "",
        search: ""
    }

    componentDidMount() {
        API.getEmployees()
        .then(res => {this.setState({employees: res.data.results})})
        .catch(err => console.log(err))
    };
    
    handleInputChange = (event) => {
        if (event.target.name === "search") {
            this.setState({
                search: event.target.value.toLowerCase()
            })
        };
        console.log(event.target.value);
        // let currentEmployees = [];
        // let newEmployees = [];

        // if (event.target.name === "search") {
        //     console.log("state.employees=", this.state.employees);

        //     currentEmployees = this.state.employees;
        //     newEmployees = currentEmployees.filter(employee => {
        //         const lc = employee.name.first.toLowerCase();

        //         console.log("lc=", lc);
        //         const filter = event.target.value.toLowerCase();
        //         console.log("filter=", filter);
        //         return lc.includes(filter);
        //     })
        //     this.setState({
        //         search: event.target.value
        //     });
        // }
        // else {
        //     newEmployees = this.state.employees;
        // }

        // this.setState({
        //     employees: newEmployees
        // })
    };

    render() {
        return (
            <div>
                <Header />
                <SearchBar handleInputChange={this.handleInputChange} search={this.state.search} />
                <EmployeeTable employees={this.state.employees} search={this.state.search} />
            </div>
        )
    }
}
