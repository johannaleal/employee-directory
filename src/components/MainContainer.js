import React, { Component } from 'react';
import API from "../utils/API";
import SearchBar from "./SearchBar";
import EmployeeTable from './EmployeeTable';

export default class MainContainer extends Component {

    state = {
        sortOrder: "",
        employees: [],
        search: ""
    }

    componentDidMount() {
        API.getEmployees()
        .then(res => {this.setState({employees: res.data.results})})
        .catch(err => console.log(err))
    };
    
    handleInputChange = event => {
        this.setState({
            search: event.target.value
        });
    };

    render() {
        return (
            <div>
                <SearchBar handleInputChange={this.handleInputChange} search={this.state.search} />
                <EmployeeTable employees={this.state.employees} />
            </div>
        )
    }
}
