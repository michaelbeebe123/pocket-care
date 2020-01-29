import React from "react";
import { Link } from "react-router-dom";
import { Button } from "bootstrap-4-react";
import "./style.css";
// =========================================================================================================
export function LoginButton(props) {
  return (
    <div id="login-button">
      <br></br>
      <Button info outline className="btn" {...props}><Link to="/login">Member Log In</Link></Button>
    </div>
  )
}

export function LoginSubmitButton(props) {
  return (
    <div id="login-submit-button">
      <br></br>
      <Button info outline className="btn" {...props}><Link to="/home">Member Log In</Link></Button>
    </div>
  )
}