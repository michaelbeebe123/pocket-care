// ---------------------------------
// DEPENDENCIES
// ---------------------------------
import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "../App";

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
      <div className="papa">
        {this.state.forms.length > 0 &&
          this.state.forms.map(form => {
            return (
              <div className="card">
                <ul class="list-group">
                  <br></br>
                  <li class="list-group-item">
                    Name: {form.first_name} {form.last_name}
                  </li>
                  <li class="list-group-item">
                    Date of Birth: {form.date_of_birth}
                  </li>
                  <li class="list-group-item">Gender: {form.gender}</li>
                  <li class="list-group-item">Medicare #: {form.medicare}</li>
                  <li class="list-group-item">
                    Military ID: {form.military_id}
                  </li>
                  <li class="list-group-item">Weight: {form.weight}</li>
                  <li class="list-group-item">Height: {form.height}</li>
                  <li class="list-group-item">Blood Type: {form.blood_type}</li>
                  <br></br>

                  <li class="list-group-item">
                    Medication Allergies: {form.medication_allergies}
                  </li>
                  <li class="list-group-item">
                    Food Allergies: {form.food_allergies}
                  </li>
                  <br></br>

                  <li class="list-group-item">Glasses: {form.glasses}</li>
                  <li class="list-group-item">Dentures: {form.dentures}</li>
                  <li class="list-group-item">
                    Cane / Walker: {form.cane_or_walker}
                  </li>
                  <li class="list-group-item">
                    Hearing Aid: {form.hearing_aid}
                  </li>
                  <li class="list-group-item">Wheelchair: {form.wheelchair}</li>
                  <li class="list-group-item">
                    Disabilities: {form.disabilities}
                  </li>
                  <li class="list-group-item">
                    Surgeries: {form.surgery_name}
                  </li>
                  <br></br>

                  <li class="list-group-item">
                    Primary Care Physician: {form.primary_physician}
                  </li>
                  <li class="list-group-item">
                    Address: {form.primary_physician_address}
                  </li>
                  <li class="list-group-item">
                    Phone: {form.primary_physician_phone}
                  </li>
                  <br></br>

                  <li class="list-group-item">Dentist: {form.dentist_name}</li>
                  <li class="list-group-item">
                    Address: {form.dentist_address}
                  </li>
                  <li class="list-group-item">Phone: {form.dentist_phone}</li>
                  <br></br>

                  <li class="list-group-item">
                    Physical Therapist: {form.physical_therapist_name}
                  </li>
                  <li class="list-group-item">
                    Address: {form.physical_therapist_address}
                  </li>
                  <li class="list-group-item">
                    Phone: {form.physical_therapist_phone}
                  </li>
                  <br></br>

                  <li class="list-group-item">
                    Other Specialist: {form.other_name}
                  </li>
                  <li class="list-group-item">Address: {form.other_address}</li>
                  <li class="list-group-item">Phone: {form.other_phone}</li>
                  <br></br>

                  <li class="list-group-item">
                    Pharmacy Address: {form.pharmacy_address}
                  </li>
                  <li class="list-group-item">
                    Pharmacy Phone: {form.pharmacy_phone}
                  </li>
                  <br></br>

                  <li class="list-group-item">
                    Insurance Provider: {form.insurance_provider}
                  </li>
                  <li class="list-group-item">
                    Insurance Number: {form.insurance_number}
                  </li>
                  <br></br>
                </ul>
              </div>
            );
          })}
        <div id="update-button">
          <br></br>
          <button className="btn btn-primary" color="">
            <Link to="/form">Update</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default History;
