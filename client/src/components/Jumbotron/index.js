import React from "react";
import "./style.css";
import { BImg } from "bootstrap-4-react";
import logo from './../../content/logo.png';

function JumbotronComponent({ children }) {
  return (
    <div className="jumbotron">
    <BImg
            src={logo}
            width="180"
            height="120"
            display="inline-block"
            align="top"
            mr="1"
          />
    </div>
  );
}

export default JumbotronComponent;