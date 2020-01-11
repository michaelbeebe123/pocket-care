import React from 'react';

// TODO: ADD ROUTES
function Nav() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Medical History</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Appointments</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Prescriptions</a>
            </li>
        </ul>
    );
}

export default Nav;