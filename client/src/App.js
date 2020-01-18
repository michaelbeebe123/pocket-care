// ---------------------------------
// DEPENDENCIES
// ---------------------------------
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// ---------------------------------
// IMPORTING PAGES
// ---------------------------------
// import Calendar from "./pages/Calendar";
// import Form from "./pages/Form";
// import Login from "./pages/Login";
// import Prescriptions from "./pages/Prescriptions";

// ---------------------------------
// IMPORTING COMPONENTS
// ---------------------------------
import CalendarComponent from "./components/Calendar";
import JumbotronComponent from "./components/Jumbotron";
import NavComponent from "./components/Nav";
// import {General, Allergies, SpecialNeeds} from "./components/Form";
import {Input, FormButton, DeleteButton} from "./components/Prescriptions";
import Form from './pages/Form';
// import AppointmentsComponent from "./components/Appointments";


// ===========================================================================

function App() {
  return (
    <Router>
      <div>
      <JumbotronComponent />
      <NavComponent />
      <Switch>
        {/* TODO: MAKE THE Login Component and SignupComponent AND GET IT WORKING WITH NO ERRORS */}
        {/* <Route exact path="/" component={LoginComponent}/>
        <Route exact path="/signup" component={SignupComponent} /> */}
        <Route exact path="/home" component={CalendarComponent}/> 
        <Route exact path="/form" component={Form}/>
        <Route exact path="/prescriptions" component={Input, FormButton, DeleteButton} />
        {/* FIXME: WE PROBABLY DON'T NEED THIS ROUTE, MOST LIKELY NOT USING AN APPOINTMENTS COMPONENT */}
        {/* <Route exact path="/appointments" component={AppointmentsComponent} /> */}
      </Switch>
      </div>
    </Router>
    );
}

export default App;