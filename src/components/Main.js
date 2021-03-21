import React, { Component } from 'react';
import API from "../utils/API";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeTable from "./EmployeeTable"

export default class Main extends Component {

    state = {
        employees: [],
        sortName: "",
        sortCity: "",
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
