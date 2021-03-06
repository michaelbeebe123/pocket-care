import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// =========================================================================================================
export function SubmitButton(props) {
  return (
    <div id="submit-button">
      <br></br>
      <button className="btn" {...props}><Link to="/history">Submit</Link></button>
    </div>
  )
}