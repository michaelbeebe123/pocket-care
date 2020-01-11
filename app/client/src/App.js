import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Form from "./pages/Form";
import Login from "./pages/Login";
import Prescriptions from "./pages/Prescriptions";
import Calender from "./components/Calendar";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Jumbotron></Jumbotron>
      <Nav></Nav>
    </Router>
    );
}

export default App;