
// TODO: FIXME: I NEED TO GET THE PRESCRIPTIONS AND THE FORM STUFF TO ONLY POST AND GET STUFF FROM A GIVEN ID

import React, { Component } from "react";
import API from "../utils/API";
import {UpdateButton} from "../components/Prescriptions";

class Prescriptions extends Component {
  state = {
    pForms: []
  };

  loadPrescriptions = () => {
      // FIXME: NEEDS TO GET THE PRESCRIPTIONS FOR A GIVEN ID
    API.getPrescriptions()
      .then(res => {
        console.log("Posts", res.data);
        this.setState({
          pForms: res.data
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    this.loadPrescriptions();
  };

  render() {
    return (
      <div key="dada" className="dada">
        <UpdateButton onClick={this.getPrescriptions}></UpdateButton>
        <br></br>
        {this.state.pForms.map((pForm) => {
            return (
              <div>
                <div className="card">
                  <br></br>
                  <ul className="list-group">
                    <h2 className="mb-0">{pForm.medication_name}</h2>
                    <br></br>
                    <li className="list-group-item">
                      Purpose: {pForm.medication_purpose}
                    </li>
                    <li className="list-group-item">
                      Dose: {pForm.medication_dose}
                    </li>
                    <li className="list-group-item">
                      Comments: {pForm.medication_instruction}
                    </li>
                    <br></br>
                  </ul>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Prescriptions;
