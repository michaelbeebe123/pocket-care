// // ---------------------------------
// // DEPENDENCIES
// // ---------------------------------
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import API from "../utils/API";

// class PrescriptionForm extends Component {

//     state = {
//         pForm: [],
//         medication_name: "",
//         medication_purpose: "",
//         medication_dose: "",
//         medication_instruction: ""
//     }

//     loadPrescriptions = () => {
//         API.getPrescriptions()
//             .then(res =>
//                 this.state.pForm.push(res.data),
//                 console.log(res.data)
//             )
//             .catch(err => console.log(err))
//     }

//     componentDidMount = () => {
//         this.loadPrescriptions();
//     }

//     handleInputChange = event => {
//         console.log("test");
//         const { name, value } = event.target;
//         this.setState({
//             [name]: value
//         });
//     };

//     handlePrescriptionSubmit = () => {
//         console.log("test");
//         console.log(this.state);
//         API.savePrescription({
//             medication_name: this.state.medication_name,
//             medication_purpose: this.state.medication_purpose,
//             medication_dose: this.state.medication_dose,
//             medication_instruction: this.state.medication_instruction
//         })
//         .then(() => {this.loadPrescriptions()
//         console.log("hello logan")})
//         .catch(err => console.log(err))
//     };

//     deletePrescriptionItem = id => {
//         API.deletePrescriptionID(id)
//         .then(() => this.loadPrescriptions())
//         .catch(err => console.log(err));
//     }

//     render() {
//         return (
//             // TODO:
//         )
//     }
// }
