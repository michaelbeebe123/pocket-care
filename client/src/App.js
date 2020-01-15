// ---------------------------------
// DEPENDENCIES
// ---------------------------------
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// ---------------------------------
// IMPORTING PAGES
// ---------------------------------
import Calendar from "./pages/Calendar";
import Form from "./pages/Form";
import Login from "./pages/Login";
import Prescriptions from "./pages/Prescriptions";

// ---------------------------------
// IMPORTING COMPONENTS
// ---------------------------------
import CalendarComponent from "./components/Calendar";
import JumbotronComponent from "./components/Jumbotron";
import NavComponent from "./components/Nav";
import {General, Allergies, SpecialNeeds} from "./components/Form";
import PrescriptionsComponent from "./components/Prescriptions";
import AppointmentsComponent from "./components/Appointments";


// ===========================================================================

function App() {
  return (
    <Router>
      <JumbotronComponent />
      <NavComponent />
      <Switch>
        <Route exact path="/" component={CalendarComponent}/>
        <Route exact path="/home" component={CalendarComponent}/> 
        /<Route exact path="/form" component={General, Allergies, SpecialNeeds} />
        <Route exact path="/prescriptions" component={PrescriptionsComponent} />
        <Route exact path="/appointments" component={AppointmentsComponent} />
      </Switch>
    </Router>
    );
}

export default App;