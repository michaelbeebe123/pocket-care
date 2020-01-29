import React from "react";
import { Link } from "react-router-dom";
import { Button } from "bootstrap-4-react";
import "./style.css";
// =========================================================================================================
export function ReturnHomeButton(props) {
  return (
    <div id="return-home-button">
      <br></br>
      <Button info outline className="btn" {...props}><Link to="/home">Return to Home Page</Link></Button>
    </div>
  )
}

export function WelcomeReturnButton(props) {
  return (
    <div id="welcome-return-button">
      <br></br>
      <Button info outline className="btn" {...props}><Link to="/">Return to Welcome Page</Link></Button>
    </div>
  )
}

export function Logout(props) {
    return (
        <div id="logout-button">
          <br></br>
          <Button info outline className="btn" {...props}><Link to="/">Log Out</Link></Button>
        </div>
    )
}