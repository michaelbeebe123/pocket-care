import React from "react";
import { Link } from "react-router-dom";
import { Button } from "bootstrap-4-react";
import "./style.css";
// =========================================================================================================
export function SignupButton(props) {
  return (
    <div id="signup-button">
      <br></br>
      <Button info outline className="btn" {...props}><Link to="/signup">Let's Sign Up</Link></Button>
    </div>
  )
}

export function SignupSubmitButton(props) {
  return (
    <div id="signup-submit-button">
      <br></br>
      <Button info outline className="btn" {...props}><Link to="/home">Sign Up</Link></Button>
    </div>
  )
}