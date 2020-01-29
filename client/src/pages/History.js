
// TODO: FIXME: I NEED TO GET THE PRESCRIPTIONS AND THE FORM STUFF TO ONLY POST AND GET STUFF FROM A GIVEN ID

// ---------------------------------
// DEPENDENCIES
// ---------------------------------
import React, { Component } from "react";
import API from "../utils/API";
import UpdateButton from "../components/History";
import "../App";
import '../components/History/style.css'

// ==================================================================================

class History extends Component {
  // ------------------------------------
  // DEFAULT STATE VALUES
  // ------------------------------------
  state = {
    forms: []
  };

  loadForm = () => {
    API.getForm()
      .then(res => {
        console.log("Posts", res.data);
        this.setState({
          forms: res.data
        });
      })
      .catch(err => console.log(err));
  };
  componentDidMount = () => {
    this.loadForm();
  };
  render() {
    return (
      <div key="papa" className="papa">
        <UpdateButton onClick={this.getFormID} />
        <br></br>
        {this.state.forms.map(form => {
            return (
              <div className="card">
                <br></br>
                <ul className="list-group">
                  <h2 className="mb-0">General</h2>
                  <br></br>
                  <li className="list-group-item">
                    Name: {form.first_name} {form.last_name}
                  </li>
                  <li className="list-group-item">
                    Date of Birth: {form.date_of_birth}
                  </li>
                  <li className="list-group-item">Gender: {form.gender}</li>
                  <li className="list-group-item">Medicare #: {form.medicare}</li>
                  <li className="list-group-item">
                    Military ID: {form.military_id}
                  </li>
                  <li className="list-group-item">Weight: {form.weight}</li>
                  <li className="list-group-item">Height: {form.height}</li>
                  <li className="list-group-item">Blood Type: {form.blood_type}</li>
                  <br></br>

                  <h2 className="mb-0">Allergies</h2>
                  <br></br>
                  <li className="list-group-item">
                    Medication Allergies: {form.medication_allergies}
                  </li>
                  <li className="list-group-item">
                    Food Allergies: {form.food_allergies}
                  </li>
                  <br></br>

                  <h2 className="mb-0">Disabilities</h2>
                  <br></br>
                  <li className="list-group-item">Glasses: {form.glasses}</li>
                  <li className="list-group-item">Dentures: {form.dentures}</li>
                  <li className="list-group-item">
                    Cane / Walker: {form.cane_or_walker}
                  </li>
                  <li className="list-group-item">
                    Hearing Aid: {form.hearing_aid}
                  </li>
                  <li className="list-group-item">Wheelchair: {form.wheelchair}</li>
                  <li className="list-group-item">
                    Disabilities: {form.disabilities}
                  </li>
                  <br></br>

                  <h2 className="mb-0">Surgeries</h2>
                  <br></br>
                  <li className="list-group-item">
                    Surgeries: {form.surgery_name}
                  </li>
                  <br></br>

                  <h2 className="mb-0">Doctor Information</h2>
                  <br></br>
                  <li className="list-group-item">
                    Primary Care Physician: {form.primary_physician}
                  </li>
                  <li className="list-group-item">
                    Address: {form.primary_physician_address}
                  </li>
                  <li className="list-group-item">
                    Phone: {form.primary_physician_phone}
                  </li>
                  <br></br>

                  <li className="list-group-item">Dentist: {form.dentist_name}</li>
                  <li className="list-group-item">
                    Address: {form.dentist_address}
                  </li>
                  <li className="list-group-item">Phone: {form.dentist_phone}</li>
                  <br></br>

                  <li className="list-group-item">
                    Physical Therapist: {form.physical_therapist_name}
                  </li>
                  <li className="list-group-item">
                    Address: {form.physical_therapist_address}
                  </li>
                  <li className="list-group-item">
                    Phone: {form.physical_therapist_phone}
                  </li>
                  <br></br>

                  <li className="list-group-item">
                    Other Specialist: {form.other_name}
                  </li>
                  <li className="list-group-item">Address: {form.other_address}</li>
                  <li className="list-group-item">Phone: {form.other_phone}</li>
                  <br></br>

                  <h2 className="mb-0">Pharmacy Information</h2>
                  <br></br>
                  <li className="list-group-item">
                    Pharmacy Address: {form.pharmacy_address}
                  </li>
                  <li className="list-group-item">
                    Pharmacy Phone: {form.pharmacy_phone}
                  </li>
                  <br></br>

                  <h2 className="mb-0">Insurance Information</h2>
                  <br></br>
                  <li className="list-group-item">
                    Insurance Provider: {form.insurance_provider}
                  </li>
                  <li className="list-group-item">
                    Insurance Number: {form.insurance_number}
                  </li>
                  <br></br>
                </ul>
              </div>
            );
          })}
        <br></br>
        
        <br></br>
      </div>
    );
  }
}

export default History;
