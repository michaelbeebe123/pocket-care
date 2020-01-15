// ---------------------------------
// DEPENDENCIES
// ---------------------------------
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "../utils/API";
// ---------------------------------
// IMPORTING PAGES
// ---------------------------------
// import About from "./pages/About";
// import Form from "./pages/Form";
// import Login from "./pages/Login";
// import Prescriptions from "./pages/Prescriptions";


// ---------------------------------
// IMPORTING COMPONENTS
// ---------------------------------
// import Calendar from "./components/Calendar";
import JumbotronComponent from "../components/Jumbotron";
import NavComponent from "../components/Nav";
import {General, Allergies, SpecialNeeds} from "../components/Form";
import PrescriptionsComponent from "../components/Prescriptions";
import AppointmentsComponent from "../components/Appointments";

class Form extends Component {
    state = {
        // TODO: ADD DEFAULT STATE VALUES
    }

    componentDidMount() {
        this.loadForm();
    }

    loadForm = () => {
        API.getForm()
            .then(res =>
                this.setState({
                    // TODO:
                })
            )
            .catch(err => console.log(err));
    };

    deleteEntry = id => {
        // TODO:
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        // TODO:
    }
}

// TODO:
// render() {};