import React, { Component } from 'react';
import API from "../utils/API";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeTable from "./EmployeeTable"

export default class Main extends Component {

    state = {
        employees: [],
        sortNameOrder: "",
        sortStateOrder: "",
        search: ""
    }

    componentDidMount() {
        API.getData()
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

    sortByName = () => {
        let newSortOrder;

        switch (this.state.sortNameOrder) {
            case "asc": newSortOrder = "desc";
                break;
            case "desc": newSortOrder = "asc";
                break;
            default: newSortOrder = "asc";
                break;
        };

        const sortedEmployees = this.state.employees.sort((a, b) => {
            if (a.name.first < b.name.first) {
                return newSortOrder === "asc" ? -1 : 1;
            }
            if (a.name.first > b.name.first) {
                return newSortOrder === "asc" ? 1: -1;
            }
            return 0;
        });

        this.setState({
            sortNameOrder: newSortOrder,
            employees: sortedEmployees
        });
    }

    sortByState = () => {
        let newSortOrder;

        switch (this.state.sortStateOrder) {
            case "asc": newSortOrder = "desc";
                break;
            case "desc": newSortOrder = "asc";
                break;
            default: newSortOrder = "asc";
                break;
        };

        const sortedEmployees = this.state.employees.sort((a, b) => {
            if (a.location.state < b.location.state) {
                return newSortOrder === "asc" ? -1 : 1;
            }
            if (a.location.state > b.location.state) {
                return newSortOrder === "asc" ? 1: -1;
            }
            return 0;
        });

        this.setState({
            sortStateOrder: newSortOrder,
            employees: sortedEmployees
        });
    }

    render() {
        return (
            <div>
                <Header />
                <SearchBar 
                    handleInputChange={this.handleInputChange} 
                    search={this.state.search} 
                />
                <EmployeeTable 
                    employees={this.state.employees} 
                    search={this.state.search} 
                    sortByName={this.sortByName} 
                    sortByState={this.sortByState}    
                    sortNameOrder={this.state.sortNameOrder} 
                    sortStateOrder={this.state.sortStateOrder}
                />
            </div>
        )
    }
}
