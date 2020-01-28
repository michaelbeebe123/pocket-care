import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";
// =========================================================================================================
// class PrescriptionComponent extends React.Component {
  

 export function UpdateButton(props) {
    return (
      <div id="update-button">
        <br></br>
        <button className="btn" {...props}><Link to="/prescription-form">Update</Link></button>
      </div>
    )
  }

  export function SubmitButton(props) {
    return (
      <div id="submit-button">
        <br></br>
        <button className="btn" {...props}><Link to="/prescriptions">Submit</Link></button>
      </div>
    )
  }
// }

// export default PrescriptionComponent;
