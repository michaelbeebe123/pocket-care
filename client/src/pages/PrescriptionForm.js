// ---------------------------------
// DEPENDENCIES
// ---------------------------------
import React, { Component } from "react";
import API from "../utils/API";
import {SubmitButton} from "../components/Prescriptions";

class PrescriptionForm extends Component {

    state = {
        pForm: [],
        medication_name: "",
        medication_purpose: "",
        medication_dose: "",
        medication_instruction: "",
        index: 0
    }

    loadPrescriptions = () => {
        API.getPrescriptions()
            .then(res =>
                this.state.pForm.push(res.data),
                // console.log(res.data)
            )
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.loadPrescriptions();
    }

    handleInputChange = event => {
        console.log("test");
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handlePrescriptionSubmit = () => {
        console.log("test");
        console.log(this.state);
        API.savePrescription({
            medication_name: this.state.medication_name,
            medication_purpose: this.state.medication_purpose,
            medication_dose: this.state.medication_dose,
            medication_instruction: this.state.medication_instruction
        })
        .then(() => {this.loadPrescriptions()
        console.log("hello logan")})
        .catch(err => console.log(err))
    };

    deletePrescriptionItem = id => {
        API.deletePrescriptionID(id)
        .then(() => this.loadPrescriptions())
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="card-body">
                <div className="card-header" id="headingTwo"><h2 className="mb-0">New Prescription</h2></div>
                <br></br>
              <form>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">
                      Name:
                  </label>
                  <input
                    className="form-control"
                    value={this.state.medication_name}
                    onChange={this.handleInputChange}
                    name="medication_name"
                    placeholder=""
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Purpose:</label>
                  <input
                    className="form-control"
                    value={this.state.medication_purpose}
                    onChange={this.handleInputChange}
                    name="medication_purpose"
                    placeholder=""
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Dose:</label>
                  <input
                    className="form-control"
                    value={this.state.medication_dose}
                    onChange={this.handleInputChange}
                    name="medication_dose"
                    placeholder=""
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Comments:</label>
                  <input
                    className="form-control"
                    value={this.state.medication_instruction}
                    onChange={this.handleInputChange}
                    name="medication_instruction"
                    placeholder=""
                  ></input>
                </div>
              </form>

              <SubmitButton onClick={this.handlePrescriptionSubmit}></SubmitButton>
            </div>
        )
    }
}

export default PrescriptionForm;