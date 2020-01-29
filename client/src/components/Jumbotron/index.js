import React from "react";
import "./style.css";
import logo from './../../content/logo.png';
import { BDiv } from "bootstrap-4-react";

function JumbotronComponent({ children }) {
  return (
    <BDiv className="jumbotron">
      <img className="logo-img" src={logo} alt="" />
    </BDiv>
  );
}

export default JumbotronComponent;