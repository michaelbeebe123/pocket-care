import React from "react";
import "./style.css"

function JumbotronComponent({ children }) {
  return (
    <div className="jumbotron">
      {children}
    </div>
  );
}

export default JumbotronComponent;