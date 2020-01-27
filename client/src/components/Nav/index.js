import React from 'react';
import { Link } from "react-router-dom";
import "./style.css"

function NavComponent() {
    return (
        <ul className="nav nav-tabs">

            <li className="nav-item">
                <Link to="/home">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/history">Medical History</Link>
            </li>
            <li className="nav-item">
                <Link to="/prescriptions">Prescriptions</Link>
            </li>
            <li className="nav-item" id="logout">
                <button className="btn btn-outline-primary"><Link to="/">Logout</Link></button>
            </li>

        </ul>
    );
}

export default NavComponent;