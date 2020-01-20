import React from 'react';
import "./style.css"

function NavComponent() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link" href="/home">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/form">Medical History</a>
            </li>
            {/* <li className="nav-item">
                <a className="nav-link" href="/appointments">Appointments</a>
            </li> */}
            <li className="nav-item">
                <a className="nav-link" href="/prescriptions">Prescriptions</a>
            </li>

            <li className="nav-item" id="login">
                <button type="button" className="btn btn-outline-primary" href="/">Logout</button>
            </li>
        </ul>
    );
}

export default NavComponent;