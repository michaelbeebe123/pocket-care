// // ---------------------------------
// // DEPENDENCIES
// // ---------------------------------
// // import React, { Component } from 'react';
// // import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// // import API from "../utils/API";
// // ---------------------------------
// // IMPORTING PAGES
// // ---------------------------------
// // import Login from "./pages/Login";
// // import Prescriptions from "./pages/Prescriptions";


// // ---------------------------------
// // IMPORTING COMPONENTS
// // ---------------------------------
// import CalendarComponent from "../components/Calendar";
// import JumbotronComponent from "../components/Jumbotron";
// import NavComponent from "../components/Nav";
// // import {General, Allergies, SpecialNeeds} from "../components/Form";
// import {Input, FormButton, DeleteButton} from "../components/Prescriptions";
// import AppointmentsComponent from "../components/Appointments";

// class Form extends Component {
//     state = {
//         forms: [],
//         first_name: "",
//         last_name: "",
//         date_of_birth: "",
//         gender: "",
//         medicare: "",
//         military_id: "",
//         weight: "",
//         height: "",
//         blood_type: ""
//         // TODO: ADD DEFAULT STATE VALUES
//     };

// //     componentDidMount() {
// //         this.loadForm();
// //     }

//     loadForm = () => {
//         API.getForm()
//             .then(res =>
//                 this.setState({
//                     forms: res.data,
//                     first_name: "",
//                     last_name: "",
//                     date_of_birth: "",
//                     gender: "",
//                     medicare: "",
//                     military_id: "",
//                     weight: "",
//                     height: "",
//                     blood_type: ""
//                     // TODO:
//                 })
//             )
//             .catch(err => console.log(err));
//     };

//     deleteEntry = id => {
//         API.deletePrescription(id)
//             .then(res => this.loadForm())
//             .catch(err => console.log(err));
//                 // TODO:
//     };

// //     handleInputChange = event => {
// //         const { name, value } = event.target;
// //         this.setState({
// //             [name]: value
// //         });
// //     };

//     handleFormSubmit = event => {
//         event.preventDefault();
//         if (this.state.first_name && this.state.last_name) {
//             API.savePrescription({
//                 first_name: this.state.first_name,
//                 last_name: this.state.last_name,
//                 date_of_birth: this.state.date_of_birth,
//                 gender: this.state.gender,
//                 medicare: this.state.medicare,
//                 military_id: this.state.military_id,
//                 weight: this.state.weight,
//                 height: this.state.height,
//                 blood_type: this.state.blood_type
//             })
//             .then(res => this.loadForm())
//             .catch(err => console.log(err));
//         }
//         // TODO:
//     };


// // TODO:
// render() {
//     return (
//         <div className="accordion" id="careTabs">
//             <General />
//             <Allergies />
//             <SpecialNeeds />
//         </div>
//     );
// }
// }

// export default Form;
