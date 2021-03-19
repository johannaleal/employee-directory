import React from "react";

function SearchBar(props) {
  return (
    <form>
      <div className="form-group row search-bar">
        <div className="col-md-1"></div>

        <div className="col-md-10">
          {/* <label htmlFor="search">Search by employee name:</label> */}
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search directory for an employee by entering their name"
            id="search"
          />
        </div>

        <div className="col-md-1"></div>
      </div>
    </form>
  );
}

export default SearchBar;