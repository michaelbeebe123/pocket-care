import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// IMPORTING PAGES
// import About from "./pages/About";
// import Form from "./pages/Form";
// import Login from "./pages/Login";
// import Prescriptions from "./pages/Prescriptions";

// IMPORTING COMPONENTS
// import Calendar from "./components/Calendar";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Prescriptions from "./components/Prescriptions";
import Appointments from "./components/Appointments";

// ===========================================================================

function App() {
  return (
    <Router>
      <Jumbotron />
      <Nav />
      <Switch>
        {/* <Route exact path="/" component={Calendar}/>
        <Route exact path="/home" component={Calendar}/> */}
        <Route exact path="/form" component={Form} />
        <Route exact path="/prescriptions" component={Prescriptions} />
        <Route exact path="/appointments" component={Appointments} />
      </Switch>
    </Router>
    );
}

export default App;