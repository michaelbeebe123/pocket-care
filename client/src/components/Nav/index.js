import React from 'react';

function NavComponent() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link" href="/home">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/form">Medical History</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/appointments">Appointments</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/prescriptions">Prescriptions</a>
            </li>
        </ul>
    );
}

export default Nav;