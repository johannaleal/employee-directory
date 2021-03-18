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
        API.getEmployees().then(apiResults => {
            // console.log("This is our results: ", answers.data.results);
            this.setState({
                employees: apiResults.data.results
            })

        })
    }

    render() {
        return (
            <div>
                {/* <SearchBar /> */}
                <h1>Hello</h1>
                <EmployeeTable employees={this.state.employees} />
               
            </div>
        )
    }
}
