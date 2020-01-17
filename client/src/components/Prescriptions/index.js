import React from "react";
export function Input(props) {
    return (
      <div className="form-group">
        <input className="form-control" {...props} />
      </div>
    );
  }
  export function FormButton(props) {
    return (
      <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
        {props.children}
      </button>
    );
  }
  export function DeleteButton(props) {
    return (
      <span className="delete-btn" {...props} role="button" tabIndex="0">
        ✗
      </span>
    );
  }