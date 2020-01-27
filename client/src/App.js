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
import SignUp from './pages/Signup';
import LoginForm from './pages/Login';
import History from "./pages/History";

// import Prescriptions from "./pages/Prescriptions";
// import Login from "./pages/Login";
// import PrescriptionsComponent from "./pages/Prescriptions";

// ---------------------------------
// IMPORTING COMPONENTS
// ---------------------------------
import JumbotronComponent from "./components/Jumbotron";
import NavComponent from "./components/Nav";
// import AppointmentsComponent from "./components/Appointments";

// ===========================================================================

function App() {
  return (
    // FIXME: WE DON'T WANT THE JUMBOTRON AND NAV TO DISPLAY ON THE SIGN UP AND LOGIN PAGES, SO 
    //        THOSE COMPONENTS WILL LIKELY NEED TO GO IN THE SWITCH STATEMENT
    <Router>
      <NavComponent />
      <JumbotronComponent />
      <Switch>
        <Route exact path="/" component={LoginForm}/>
        <Route path="/login" component={LoginForm}/>
        <Route eaxt path="/signup" component={SignUp} />
        <Route path="/home" component={Calendar}/> 
        <Route path="/calendar" component={Calendar}/>
        <Route path="/history" component={History} />
        <Route path="/form" component={Form} />
      </Switch>
    </Router>
    );
}


export default App;