import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {About, Form, Login, Prescriptions} from "./pages";
import {Calendar, Jumbotron, Nav} from "./components";

function App() {
  return (
    <Router>
      <Jumbotron></Jumbotron>
      <Nav></Nav>
    </Router>
    );
}

export default App;