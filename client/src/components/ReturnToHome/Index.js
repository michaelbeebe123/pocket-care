import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// =========================================================================================================
export function ReturnHomeButton(props) {
  return (
    <div id="return-home-button">
      <br></br>
      <button className="btn" {...props}><Link to="/home">Return to Home Page</Link></button>
    </div>
  )
}

export function WelcomeReturnButton(props) {
  return (
    <div id="welcome-return-button">
      <br></br>
      <button className="btn" {...props}><Link to="/">Return to Welcome Page</Link></button>
    </div>
  )
}