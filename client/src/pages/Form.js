// ---------------------------------
// DEPENDENCIES
// ---------------------------------
import React, { Component } from "react";
import { Collapse, Card } from "bootstrap-4-react";
// import { Link } from "react-router-dom";
import API from "../utils/API";
// import { SubmitButton } from "../components/Form";

// ==================================================================================
class Form extends Component {
  // ------------------------------------
  // DEFAULT STATE VALUES
  // ------------------------------------
  state = {
    form: [],
    first_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    medicare: "",
    military_id: "",
    weight: "",
    height: "",
    blood_type: "",
    medication_allergies: "",
    food_allergies: "",
    glasses: false,
    dentures: false,
    cane_or_walker: false,
    hearing_aid: false,
    wheelchair: false,
    disabilities: "",
    surgery_name: "",
    surgion: "",
    surgery_date: "",
    surgery_comments: "",
    primary_physician: "",
    primary_physician_address: "",
    primary_physician_phone: "",
    physical_therapist_name: "",
    physical_therapist_address: "",
    physical_therapist_phone: "",
    dentist_name: "",
    dentist_address: "",
    dentist_phone: "",
    other_specialism: "",
    other_name: "",
    other_address: "",
    other_phone: "",
    pharmacy_address: "",
    pharmacy_phone: "",
    insurance_provider: "",
    insurance_number: "",
    medication_name: "",
    medication_purpose: "",
    medication_dose: "",
    medication_instruction: "",
    immunization_name: "",
    immunization_date: "",
    immunization_renewal_date: ""
  };
  // ==================================================================================
  // ----------------------------------------
  // RENDERS THE FORM TO THE PAGE
  // ----------------------------------------
  loadForm = () => {
    API.getForm()
      .then(res => 
          this.state.form.push(res.data),
          console.log(this.state.form.length)
      )
      .catch(err => console.log(err))
  }

  componentDidMount = () => {
    this.loadForm();
  };
  // ==================================================================================

  // NOT SURE WHAT THIS DOES
  handleInputChange = event => {
    console.log("test");
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // ==================================================================================
  // ------------------------------------------
  // CHANGES THE STATE OF THE FORM
  // ------------------------------------------
  handleFormSubmit = () => {
    console.log("test");
    console.log(this.state);
    // FIXME:
    API.saveForm({
    first_name: this.state.first_name,
    last_name: this.state.last_name,
    date_of_birth: this.state.date_of_birth,
    gender: this.state.gender,
    medicare: this.state.medicare,
    military_id: this.state.military_id,
    weight: this.state.weight,
    height: this.state.height,
    blood_type: this.state.blood_type,
    medication_allergies: this.state.medication_allergies,
    food_allergies: this.state.food_allergies,
    glasses: this.state.glasses,
    dentures: this.state.dentures,
    cane_or_walker: this.state.cane_or_walker,
    hearing_aid: this.state.hearing_aid,
    wheelchair: this.state.wheelchair,
    disabilities: this.state.disabilities,
    surgery_name: this.state.surgery_name,
    surgion: this.state.surgion,
    surgery_date: this.state.surgery_date,
    surgery_comments: this.state.surgery_comments,
    primary_physician: this.state.primary_physician,
    primary_physician_address: this.state.primary_physician_address,
    primary_physician_phone: this.state.primary_physician_phone,
    physical_therapist_name: this.state.physical_therapist_name,
    physical_therapist_address: this.state.physical_therapist_address,
    physical_therapist_phone: this.state.physical_therapist_phone,
    dentist_name: this.state.dentist_name,
    dentist_address: this.state.dentist_address,
    dentist_phone: this.state.dentist_phone,
    other_specialism: this.state.other_specialism,
    other_name: this.state.other_name,
    other_address: this.state.other_address,
    other_phone: this.state.other_phone,
    pharmacy_address: this.state.pharmacy_address,
    pharmacy_phone: this.state.pharmacy_phone,
    insurance_provider: this.state.insurance_provider,
    insurance_number: this.state.insurance_number,
    medication_name: this.state.medication_name,
    medication_purpose: this.state.medication_purpose,
    medication_dose: this.state.medication_dose,
    medication_instruction: this.state.medication_instruction,
    immunization_name: this.state.immunization_name,
    immunization_date: this.state.immunization_date,
    immunization_renewal_date: this.state.immunization_renewal_date
    })
    .then(() => {this.loadForm()
      console.log('hello logan')})
      .catch(err => console.log(err));
  };
  // ==================================================================================
  // ----------------------------------
  // FUNCTION THAT DELETES A FORM ITEM
  // ----------------------------------
  deleteFormItem = id => {
    API.deleteFormID(id)
      .then(() => this.loadForm())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="accordion" id="accordionExample">
        <Card>
          <Card.Header mb="0">
          <Collapse.Button link target="#collapseOne" id="headingOne" aria-expanded="false">
              General
            </Collapse.Button>
          </Card.Header>
          <Collapse id="collapseOne" show aria-labelledby="headingOne" data-parent="#accordionExample">
            <Card.Body>
              <form>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">First Name</label>
                  <input
                    className="form-control"
                    value={this.state.first_name}
                    onChange={this.handleInputChange}
                    name="first_name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Last Name</label>
                  <input
                    className="form-control"
                    value={this.state.last_name}
                    onChange={this.handleInputChange}
                    name="last_name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Date of Birth</label>
                  <input
                    className="form-control"
                    value={this.state.date_of_birth}
                    onChange={this.handleInputChange}
                    name="date_of_birth"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Gender</label>
                  <select
                    className="custom-select"
                    value={this.state.gender}
                    onChange={this.handleInputChange}
                    name="gender"
                  >
                    <option defaultValue>Choose...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Medicare Number</label>
                  <input
                    className="form-control"
                    value={this.state.medicare}
                    onChange={this.handleInputChange}
                    name="medicare"
                    placeholder="0000-000-0000"
                  ></input>
                </div>

                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Military ID</label>
                  <input
                    className="form-control"
                    value={this.state.military_id}
                    onChange={this.handleInputChange}
                    name="military_id"
                    placeholder="0000-000-0000"
                  ></input>
                </div>

                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Weight</label>
                  <input
                    className="form-control"
                    value={this.state.weight}
                    onChange={this.handleInputChange}
                    name="weight"
                    placeholder="000"
                  ></input>
                </div>

                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Blood Type</label>
                  <select
                    className="custom-select"
                    value={this.state.blood_type}
                    onChange={this.handleInputChange}
                    name="blood_type"
                  >
                    <option defaultValue>Choose...</option>
                    <option value="O-Negative">O Negative</option>
                    <option value="O-Positive">O Positive</option>
                    <option value="A-Negative">A Negative</option>
                    <option value="A-Positive">A Positive</option>
                    <option value="B-Negative">B Negative</option>
                    <option value="B-Positive">B Positive</option>
                    <option value="AB-negative">AB Negative</option>
                    <option value="AB-positive">AB Positive</option>
                  </select>
                </div>
              </form>
              </Card.Body>
          </Collapse>
        </Card>
      </div>
        );
  }
}

export default Form;
