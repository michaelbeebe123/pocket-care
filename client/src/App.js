// ---------------------------------
// DEPENDENCIES
// ---------------------------------
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import JumbotronComponent from "./components/Jumbotron";
import NavComponent from "./components/Nav";

// ---------------------------------
// IMPORTING PAGES
// ---------------------------------
// import Calendar from "./pages/Calendar";
import Form from "./pages/Form";
// import Prescriptions from "./pages/Prescriptions";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup"


// ===========================================================================

function App() {
  return (
    // FIXME: WE DON'T WANT THE JUMBOTRON AND NAV TO DISPLAY ON THE SIGN UP AND LOGIN PAGES, SO 
    //        THOSE COMPONENTS WILL LIKELY NEED TO GO IN THE SWITCH STATEMENT
    <Router>
      <Switch>
        {/* // FIXME: */}
        {/* <Route exact path="/" component={Signup}/>
        <Route exact path="/signup" component={Login} />  */}
      </Switch>
      <JumbotronComponent />
      <NavComponent />
      <Switch>
        {/* <Route exact path="/home" component={Calendar}/>  */}
        {/* TODO: ADD ROUTE TO THE FORM */}
        <Route exact path="/form" component={Form} />
        {/* <Route exact path="/prescriptions" component={Prescriptions} /> */}
      </Switch>
    </Router>
    );
}

export default App;