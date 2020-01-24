// ---------------------------------
// DEPENDENCIES
// ---------------------------------
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ---------------------------------
// IMPORTING PAGES
// ---------------------------------
// import Calendar from "./pages/Calendar";
import Form from "./pages/Form";
// import Login from "./pages/Login";
// import Prescriptions from "./pages/Prescriptions";

// ---------------------------------
// IMPORTING COMPONENTS
// ---------------------------------
import JumbotronComponent from "./components/Jumbotron";
import NavComponent from "./components/Nav";


// ===========================================================================

function App() {
  return (
    // FIXME: WE DON'T WANT THE JUMBOTRON AND NAV TO DISPLAY ON THE SIGN UP AND LOGIN PAGES, SO 
    //        THOSE COMPONENTS WILL LIKELY NEED TO GO IN THE SWITCH STATEMENT
    <Router>
      <JumbotronComponent />
      <NavComponent />
      <Switch>
        {/* TODO: MAKE THE Login Component and SignupComponent AND GET IT WORKING WITH NO ERRORS */}
        {/* {/* <Route exact path="/" component={LoginComponent}/> */}
        {/* <Route exact path="/signup" component={SignupComponent} />
        <Route exact path="/home" component={CalendarComponent}/>  */}
        <Route exact path="/form" component={Form}/>
        {/* <Route exact path="/prescriptions" component={Input, FormButton, DeleteButton} /> */}
        {/* FIXME: WE PROBABLY DON'T NEED THIS ROUTE, MOST LIKELY NOT USING AN APPOINTMENTS COMPONENT */}
        {/* <Route exact path="/appointments" component={AppointmentsComponent} /> */}
      </Switch>
    </Router>
    );
}


export default App;