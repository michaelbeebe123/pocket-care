// ---------------------------------
// DEPENDENCIES
// ---------------------------------
import React, { Component } from 'react';
import API from "../utils/API";
import {General, Allergies, SpecialNeeds} from "../components/Form";
class Form extends Component {
    state = {
        forms: [],
        first_name: "",
        last_name: "",
        date_of_birth: "",
        gender: "",
        medicare: "",
        military_id: "",
        weight: "",
        height: "",
        blood_type: ""
        // TODO: ADD DEFAULT STATE VALUES
    };
    componentDidMount() {
        this.loadForm();
    }
    loadForm = () => {
        API.getForm()
            .then(res =>
                this.setState({
                    forms: res.data,
                    first_name: "",
                    last_name: "",
                    date_of_birth: "",
                    gender: "",
                    medicare: "",
                    military_id: "",
                    weight: "",
                    height: "",
                    blood_type: ""
                    // TODO:
                })
            )
            .catch(err => console.log(err));
    };
    deleteEntry = id => {
        API.deletePrescription(id)
            .then(() => this.loadForm())
            .catch(err => console.log(err));
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
        if (this.state.first_name && this.state.last_name) {
            API.savePrescription({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                date_of_birth: this.state.date_of_birth,
                gender: this.state.gender,
                medicare: this.state.medicare,
                military_id: this.state.military_id,
                weight: this.state.weight,
                height: this.state.height,
                blood_type: this.state.blood_type
            })
            .then(() => this.loadForm())
            .catch(err => console.log(err));
        }
        // TODO:
    };
// TODO:
render() {
    return (
        <div className="accordion" id="careTabs">
            <General />
            <Allergies />
            <SpecialNeeds />
        </div>
    );
}
}
export default Form;