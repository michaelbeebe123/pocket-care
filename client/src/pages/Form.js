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
    hearind_aid: false,
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
      .then(res => this.setState({}))
      .catch(err => console.log(err));
  }

  componentDidMount = () => {
    this.loadForm();
  }
  // ==================================================================================

  // NOT SURE WHAT THIS DOES
  handleInputChange = (event) => {
    console.log('test');
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  // ==================================================================================
  // ------------------------------------------
  // CHANGES THE STATE OF THE FORM
  // ------------------------------------------
  handleFormSubmit = () => {
      console.log('test')
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
      }
  )
  .then(() => this.loadForm())
  .catch(err => console.log(err));

    }
    // ==================================================================================
    // ----------------------------------
    // TODO: FUNCTION THAT DELETES A FORM ITEM
    // ----------------------------------
    deleteFormItem = (id) => {
      API.deleteFormID(id)
        .then(() => this.loadForm())
        .catch(err => console.log(err));
    };

  render() {
    return (
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 class="mb-0">
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
                  <label for="formGroupExampleInput">First Name</label>
                  <input
                    className="form-control"
                    value={this.state.first_name}
                    onChange={this.handleInputChange}
                    name="first_name"
                  />
                </div>

                <div className="form-group">
                  <label for="formGroupExampleInput">Last Name</label>
                  <input
                    className="form-control"
                    value={this.state.last_name}
                    onChange={this.handleInputChange}
                    name="last_name"
                  />
                </div>

                <div className="form-group">
                  <label for="formGroupExampleInput">Date of Birth</label>
                  <input
                    className="form-control"
                    value={this.state.date_of_birth}
                    onChange={this.handleInputChange}
                    name="date_of_birth"
                  />
                </div>

                {/* TODO: */}
                <div className="form-group">
                  <label for="formGroupExampleInput">Gender</label>
                  <select className="custom-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label for="formGroupExampleInput">Medicare Number</label>
                  <input
                    className="form-control"
                    value={this.state.medicare}
                    onChange={this.handleInputChange}
                    name="medicare"
                    placeholder="0000-000-0000"
                  ></input>
                </div>

                <div className="form-group">
                  <label for="formGroupExampleInput">Military ID</label>
                  <input
                    className="form-control"
                    value={this.state.military_id}
                    onChange={this.handleInputChange}
                    name="military_id"
                    placeholder="0000-000-0000"
                  ></input>
                </div>

                <div className="form-group">
                  <label for="formGroupExampleInput">Weight</label>
                  <input
                    className="form-control"
                    value={this.state.weight}
                    onChange={this.handleInputChange}
                    name="weight"
                    placeholder="000"
                  ></input>
                </div>

                {/* TODO: */}
                <div className="form-group">
                  <label for="formGroupExampleInput">Blood Type</label>
                  <select className="custom-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
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
                class="btn btn-link"
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
            <div class="card-body">
              <form>
                <div className="form-group">
                  <label for="formGroupExampleInput">
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
                  <label for="formGroupExampleInput">Food Allergies</label>
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
                {/* TODO: */}
                <div className="form-group">
                  <label for="exampleFormControlSelect1">Glasses</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                {/* TODO: */}
                <div className="form-group">
                  <label for="exampleFormControlSelect1">Dentures</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                {/* TODO: */}
                <div className="form-group">
                  <label for="exampleFormControlSelect1">Cane/Walker</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                {/* TODO: */}
                <div className="form-group">
                  <label for="exampleFormControlSelect1">Wheelchair</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                {/* TODO: */}
                <div className="form-group">
                  <label for="exampleFormControlSelect1">Hearing Aid</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                <div className="form-group">
                  <label for="formGroupExampleInput">Other Disabilities</label>
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
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Add Surgery
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Surgery
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-group">
                          <label for="formGroupExampleInput">
                            Type of Surgery
                          </label>
                          <input
                            className="form-control"
                            value={this.state.surgery_name}
                            onChange={this.handleInputChange}
                            name="surgery_name"
                            placeholder=""
                          ></input>
                        </div>
                        <div className="form-group">
                          <label for="formGroupExampleInput">
                            Name of Surgeon
                          </label>
                          <input
                            className="form-control"
                            value={this.state.surgion}
                            onChange={this.handleInputChange}
                            name="surgion"
                            placeholder=""
                          ></input>
                        </div>
                        <div className="form-group">
                          <label for="formGroupExampleInput">
                            Surgery Date
                          </label>
                          <input
                            className="form-control"
                            value={this.state.surgery_date}
                            onChange={this.handleInputChange}
                            name="surgery_date"
                            placeholder="YYYY-MM-DD"
                          ></input>
                        </div>
                        <div className="form-group">
                          <label for="formGroupExampleInput">Comments</label>
                          <input
                            className="form-control"
                            value={this.state.surgery_comments}
                            onChange={this.handleInputChange}
                            name="surgery_comments"
                            placeholder=""
                          ></input>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
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
                <label for="formGroupExampleInput">Name</label>
                <input
                  className="form-control"
                  value={this.state.primary_physician}
                  onChange={this.handleInputChange}
                  name="primary_physician"
                  placeholder=""
                ></input>
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput">Address</label>
                <input
                  className="form-control"
                  value={this.state.primary_physician_address}
                  onChange={this.handleInputChange}
                  name="primary_physician_address"
                  placeholder="Address, City, State, Zip"
                ></input>
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput">Phone</label>
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
                <label for="formGroupExampleInput">Name</label>
                <input
                  className="form-control"
                  value={this.state.dentist_name}
                  onChange={this.handleInputChange}
                  name="dentist_name"
                  placeholder=""
                ></input>
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput">Address</label>
                <input
                  className="form-control"
                  value={this.state.dentist_address}
                  onChange={this.handleInputChange}
                  name="dentist_address"
                  placeholder="Address, City, State, Zip"
                ></input>
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput">Phone</label>
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
                <label for="formGroupExampleInput">Name</label>
                <input
                  className="form-control"
                  value={this.state.physical_therapist_name}
                  onChange={this.handleInputChange}
                  name="physical_therapist_name"
                  placeholder=""
                ></input>
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput">Address</label>
                <input
                  className="form-control"
                  value={this.state.physical_therapist_address}
                  onChange={this.handleInputChange}
                  name="physical_therapist_address"
                  placeholder="Address, City, State, Zip"
                ></input>
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput">Phone</label>
                <input
                  className="form-control"
                  value={this.state.physical_therapist_phone}
                  onChange={this.physical_therapist_phone}
                  name="primary_physician_phone"
                  placeholder="###-###-####"
                ></input>
              </div>
            </div>
          </div>
        </div>

        <SubmitButton onClick={this.handleFormSubmit}/>
      </div>
    );
  }
}

export default Form;