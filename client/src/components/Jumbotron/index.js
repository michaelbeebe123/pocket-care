import React from "react";
import "./style.css";
import logo from './../../content/logo.png';

function JumbotronComponent({ children }) {
  return (
    <div className="jumbotron">
      <img className="logo-img" src={logo} alt="" />
    </div>
  );
}

export default JumbotronComponent;