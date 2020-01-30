// ---------------------------------
// DEPENDENCIES
// ---------------------------------
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ---------------------------------
// IMPORTING PAGES
// ---------------------------------
import Welcome from "./pages/Welcome";
import Calendar from "./pages/Calendar";
import Form from "./pages/Form";
import SignUpForm from './pages/Signup';
import LoginForm from './pages/Login';
import History from "./pages/History";
import Prescriptions from './pages/Prescriptions';
import PrescriptionForm from "./pages/PrescriptionForm";

// ---------------------------------
// IMPORTING COMPONENTS
// ---------------------------------
import JumbotronComponent from "./components/Jumbotron";
import NavComponent from "./components/Nav";
// import AppointmentsComponent from "./components/Appointments";


// ===========================================================================
function App() {
  return (
    <Router>
      <JumbotronComponent />
      <NavComponent />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route path="/home" component={Calendar} /> 
        <Route path="/calendar" component={Calendar} />
        <Route path="/history" component={History} />
        <Route exact path="/form" component={Form} />
        <Route path="/prescriptions" component={Prescriptions} />
        <Route path="/prescription-form" component={PrescriptionForm} />
      </Switch>
    </Router>
    );
}


export default App;