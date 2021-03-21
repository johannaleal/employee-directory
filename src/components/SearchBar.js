import React from "react";
import "./style.css";

const  SearchBar = (props) => {
  return (
    <form>
      <div className="form-group row search-bar">
        <div className="col-md-1"></div>

        <div className="col-md-4">
          <label htmlFor="search" className="searchbar-label">Search by Employee Name:</label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            id="search"
          />
        </div>

        <div className="col-md-7"></div>
      </div>
    </form>
  );
}

export default SearchBar;