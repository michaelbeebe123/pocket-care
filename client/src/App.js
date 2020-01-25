// ---------------------------------
// DEPENDENCIES
// ---------------------------------
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ---------------------------------
// IMPORTING PAGES
// ---------------------------------
//import CalendarComponent from "./pages/Calendar";
import Form from "./pages/Form";
import SignUp from './pages/Signup';
import LoginForm from './pages/Login';

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
      <NavComponent />
      <Switch>
        {/* <Route exact path="/" component={LoginComponent}/> */}
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={CalendarComponent}/> 
        <Route exact path="calendar" component={CalendarComponent}/>
        <Route exact path="/form" component={Form} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LoginForm} />
        {/*<Route exact path="/pillfinder" component={PillFinder} />*/}
        {/* <Route exact path="/prescriptions" component={Prescriptions} /> */}
      </Switch>
    </Router>
    );
}


export default App;