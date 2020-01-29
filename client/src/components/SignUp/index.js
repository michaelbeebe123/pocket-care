import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// =========================================================================================================
export function SignupButton(props) {
  return (
    <div id="signup-button">
      <br></br>
      <button className="btn" {...props}><Link to="/signup">Sign Up</Link></button>
    </div>
  )
}

export function SignupSubmitButton(props) {
  return (
    <div id="signup-submit-button">
      <br></br>
      <button className="btn" {...props}><Link to="/home">Submit</Link></button>
    </div>
  )
}