import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

class Prescriptions extends Component {

    state = {
        pForm: [],
        medication_name: "",
        medication_purpose: "",
        medication_dose: "",
        medication_instruction: ""
    };

    loadPrescriptions = () => {
        API.getPrescriptionID()
            .then(res =>
                this.state.pForm.push(res.data),
            )
            .catch(err => console.log(err))
    };

    componentDidMount = () => {
        this.loadPrescriptions();
    };

    handleInputChange = event => {
        console.log('test');
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = () => {
        console.log('test');
        console.log(this.state);
        API.savePrescription({
            medication_name: this.state.medication_name,
            medication_purpose: this.state.medication_purpose,
            medication_dose: this.state.medication_dose,
            medication_instruction: this.state.medication_instruction
        })
    }

    render() {
        // TODO: MAKE THIS BUTTON TOGGLE A MODAL THAT HAS A FORM TO ADD A NEW PRESCRIPTION
        return (
            <div classNam="dada">
                {this.state.pForm.length > 0 &&
                    // FIXME: 
                    this.state.pForm.map(pForm => {
                        return (
                            <div id="modal-stuff">
                                <div id="add-prescription-button">
                                    {/* MODAL BUTTON */}
                                    <button className="btn">
                                        <Link data-toggle="modal" data-target="#new-prescription-modal">Add Prescription</Link>
                                    </button>
                                </div>

                                {/* TODO: MODAL */}
                                <div className="modal fade" id="new-prescription-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalScrollableTitle">New Prescription</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>

                                            <div class="modal-body">
                                                <form>
                                                    <div class="form-group">
                                                        <label for="formGroupExampleInput">Name of medication:</label>
                                                        <input type="text" class="form-control" placeholder="" value={this.state.medication_name} name="medication_name"></input>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="formGroupExampleInput">Purpose for taking the medication:</label>
                                                        <input type="text" class="form-control" placeholder="" value={this.state.medication_purpose} name="medication_purpose"></input>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="formGroupExampleInput">Dose:</label>
                                                        <input type="text" class="form-control" placeholder="" value={this.state.medication_dose} name="medication_dose"></input>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="formGroupExampleInput">Comments / Instructions:</label>
                                                        <input type="text" class="form-control" placeholder="" alue={this.state.medication_instruction} name="medication_instruction"></input>
                                                    </div>
                                                </form>
                                            </div>

                                            <div class="modal-footer">
                                                {/* TODO: MAKE THESE BUTTONS DO STUFF */}
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            // TODO: CARD FOR DISPLAYING SAVED PRESCRIPTIONS
                            // <div className="Card">

                            // </div>

                    );
                    })}
            </div>
        );
    }
}


export default Prescriptions;