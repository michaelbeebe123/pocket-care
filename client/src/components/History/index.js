import React from "react";
import { Link } from "react-router-dom";
// import "./style.css"
// =========================================================================================================
export default function UpdateButton(props) {

  return (
    <div id="update-button">
      <br></br>
      <button className="btn" {...props}><Link to="/form">Update</Link></button>
    </div>
  )
}

