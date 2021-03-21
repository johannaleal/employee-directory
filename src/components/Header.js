import React from "react";
import "./style.css";

function Header () {
    return (
        <div className="header row">
            <div className="col-md-12">
                <h1>
                    <i className="fas fa-address-book"></i><br />
                    Employee Directory
                </h1>
            </div>
        </div>
    )
}

export default Header;
