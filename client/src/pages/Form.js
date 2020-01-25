// ---------------------------------
// DEPENDENCIES
// ---------------------------------
import React, { Component } from "react";
import API from "../utils/API";
import { SubmitButton } from "../components/Form";

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
          this.state.form.push(res.data)
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
      allergies: {
        medication_allergies: this.state.medication_allergies,
        food_allergies: this.state.food_allergies
      },
      needs: {
        glasses: this.state.glasses,
        dentures: this.state.dentures,
        cane_or_walker: this.state.cane_or_walker,
        hearind_aid: this.state.hearind_aid,
        wheelchair: this.state.wheelchair
      },
      disabilities: this.state.disabilities,
      surgeries: {
        name: this.state.surgery_name,
        doctor: this.state.surgion,
        date: this.state.surgery_date,
        comments: this.state.surgery_comments
      },
      doctors: {
        primary_physician: {
          name: this.state.primary_physician,
          address: this.state.primary_physician_address,
          phone: this.state.primary_physician_phone
        },
        specialists: {
          physical_therapist: {
            name: this.state.physical_therapist_name,
            address: this.state.physical_therapist_address,
            phone: this.state.physical_therapist_phone
          },
          dentist: {
            name: this.state.dentist_name,
            address: this.state.dentist_address,
            phone: this.state.dentist_phone
          },
          other: {
            specialism: this.state.other_specialism,
            name: this.state.other_name,
            address: this.state.other_address,
            phone: this.state.other_phone
          }
        }
      },
      pharmacy: {
        address: this.state.pharmacy_address,
        phone: this.state.pharmacy_phone
      },
      insurance: {
        provider: this.state.insurance_provider,
        account_number: this.state.insurance_number
      },
      medication: {
        name: this.state.medication_name,
        purpose: this.state.medication_purpose,
        dose: this.state.medication_dose,
        instruction: this.state.medication_instruction
      },
      immunization: {
        name: this.state.immunization_name,
        date: this.state.immunization_date,
        renewal_date: this.state.immunization_renewal_date
      }
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
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                General
              </button>
            </h2>
          </div>
          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#careTabs"
          >
            <div className="card-body">
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
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Allergies
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapse show"
            aria-labelledby="headingTwo"
            data-parent="#careTabs"
          >
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">
                    Medication Allergies
                  </label>
                  <input
                    className="form-control"
                    value={this.state.medication_allergies}
                    onChange={this.handleInputChange}
                    name="medication_allergies"
                    placeholder="Seperate with commmas."
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Food Allergies</label>
                  <input
                    className="form-control"
                    value={this.state.food_allergies}
                    onChange={this.handleInputChange}
                    name="food_allergies"
                    placeholder="Seperate with commmas."
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Special Needs
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            className="collapse show"
            aria-labelledby="headingThree"
            data-parent="#careTabs"
          >
            <br></br>

            <h6>Select "Yes" for those that apply.</h6>

            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">Glasses</label>
                  <select
                    className="form-control"
                    value={this.state.glasses}
                    onChange={this.handleInputChange}
                    name="glasses"
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">Dentures</label>
                  <select
                    className="form-control"
                    value={this.state.dentures}
                    onChange={this.handleInputChange}
                    name="dentures"
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">Cane/Walker</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    value={this.state.cane_or_walker}
                    onChange={this.handleInputChange}
                    name="cane_or_walker"
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">Wheelchair</label>
                  <select
                    className="form-control"
                    value={this.state.wheelchair}
                    onChange={this.handleInputChange}
                    name="wheelchair"
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">Hearing Aid</label>
                  <select
                    className="form-control"
                    value={this.state.hearing_aid}
                    onChange={this.handleInputChange}
                    name="hearing_aid"
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Other Disabilities</label>
                  <input
                    className="form-control"
                    value={this.state.disabilities}
                    onChange={this.handleInputChange}
                    name="disabilities"
                    placeholder="Seperate with commmas."
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* TODO: */}
        <div className="card">
          <div className="card-header" id="headingFour">
            <h2 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Surgeries
              </button>
            </h2>
          </div>
          <div
            id="collapseFour"
            className="collapse show"
            aria-labelledby="headingFour"
            data-parent="#careTabs"
          >
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">List Surgeries</label>
                <input
                  className="form-control"
                  value={this.state.surgery_name}
                  onChange={this.handleInputChange}
                  name="surgery_name"
                  placeholder="Seperate with commmas."
                ></input>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="headingFour">
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Doctor Information
                </button>
              </h2>
            </div>
            <div
              id="collapseFour"
              className="collapse show"
              aria-labelledby="headingFour"
              data-parent="#careTabs"
            >
              <div className="card-body">
                <h4>Primary Care Physician</h4>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Name</label>
                  <input
                    className="form-control"
                    value={this.state.primary_physician}
                    onChange={this.handleInputChange}
                    name="primary_physician"
                    placeholder=""
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Address</label>
                  <input
                    className="form-control"
                    value={this.state.primary_physician_address}
                    onChange={this.handleInputChange}
                    name="primary_physician_address"
                    placeholder="Address, City, State, Zip"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Phone</label>
                  <input
                    className="form-control"
                    value={this.state.primary_physician_phone}
                    onChange={this.handleInputChange}
                    name="primary_physician_phone"
                    placeholder="###-###-####"
                  ></input>
                </div>

                <h4>Dentist</h4>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Name</label>
                  <input
                    className="form-control"
                    value={this.state.dentist_name}
                    onChange={this.handleInputChange}
                    name="dentist_name"
                    placeholder=""
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Address</label>
                  <input
                    className="form-control"
                    value={this.state.dentist_address}
                    onChange={this.handleInputChange}
                    name="dentist_address"
                    placeholder="Address, City, State, Zip"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Phone</label>
                  <input
                    className="form-control"
                    value={this.state.dentist_phone}
                    onChange={this.handleInputChange}
                    name="dentist_phone"
                    placeholder="###-###-####"
                  ></input>
                </div>

                <h4>Physical Therapist</h4>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Name</label>
                  <input
                    className="form-control"
                    value={this.state.physical_therapist_name}
                    onChange={this.handleInputChange}
                    name="physical_therapist_name"
                    placeholder=""
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Address</label>
                  <input
                    className="form-control"
                    value={this.state.physical_therapist_address}
                    onChange={this.handleInputChange}
                    name="physical_therapist_address"
                    placeholder="Address, City, State, Zip"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Phone</label>
                  <input
                    className="form-control"
                    value={this.state.physical_therapist_phone}
                    onChange={this.handleInputChange}
                    name="primary_physician_phone"
                    placeholder="###-###-####"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="card">
          <div className="card-header" id="headingFour">
            <h2 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Pharmacy Information
              </button>
            </h2>
          </div>
          <div
            id="collapseFour"
            className="collapse show"
            aria-labelledby="headingFour"
            data-parent="#careTabs"
          >
            <div className="card-body">

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Pharmacy Address</label>
                <input
                  className="form-control"
                  value={this.state.pharmacy_address}
                  onChange={this.handleInputChange}
                  name="pharmacy_address"
                  placeholder=""
                ></input>
              </div>


              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Pharmacy Phone</label>
                <input
                  className="form-control"
                  value={this.state.pharmacy_phone}
                  onChange={this.handleInputChange}
                  name="pharmacy_phone"
                  placeholder="000-000-0000"
                ></input>
              </div>
            </div>
          </div>
        </div>



        <div className="card">
          <div className="card-header" id="headingFour">
            <h2 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Insurance Information
              </button>
            </h2>
          </div>
          <div
            id="collapseFour"
            className="collapse show"
            aria-labelledby="headingFour"
            data-parent="#careTabs"
          >
            <div className="card-body">

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Insurance Provider</label>
                <input
                  className="form-control"
                  value={this.state.insurance_provider}
                  onChange={this.handleInputChange}
                  name="insurance_provider"
                  placeholder=""
                ></input>
              </div>


              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Insurance Number</label>
                <input
                  className="form-control"
                  value={this.state.insurance_number}
                  onChange={this.handleInputChange}
                  name="insurance_number"
                  placeholder="000-000-0000"
                ></input>
              </div>
            </div>
          </div>
        </div>

        <SubmitButton onClick={this.handleFormSubmit} />

        <br></br>
      </div>
    );
  }
}

export default Form;
