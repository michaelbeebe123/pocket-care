// ---------------------------------
// DEPENDENCIES
// ---------------------------------
import React, { Component } from "react";
import API from "../utils/API";
import { General, Allergies, SpecialNeeds } from "../components/Form";

// ==================================================================================
class Form extends Component {
  // ------------------------------------
  // DEFAULT STATE VALUES
  // ------------------------------------
  state = {
    forms: [],
    first_name: "",
    last_name: "",
    // FIXME:
    date_of_birth: "",
    gender: "",
    medicare: "",
    military_id: "",
    weight: "",
    height: "",
    blood_type: "",
    allergies: {
        medication_allergies: "",
        food_allergies: ""
    },
    needs: {
        glasses: false,
        dentures: false,
        cane_or_walker: false,
        hearind_aid: false,
        wheelchair: false
    },
    disabilities: [],
    surgeries: {
        name: "",
        doctor: "",
        // FIXME:
        date: "",
        comments: ""
    },
    doctors: {
        primary_physician: {
            name: "",
            address: "",
            phone: ""
        },
        specialists: {
            physical_therapist: {
                name: "",
                address: "",
                phone: ""
            },
            dentist: {
                name: "",
                address: "",
                phone: ""
            },
            other: {
                specialism: "",
                name: "",
                address: "",
                phone: ""
            }
        } 
    },
    pharmacy: {
        address: "",
        phone: ""
    },
    insurance: {
        provider: "",
        account_number: ""
    },
    medication: {
        name: "",
        purpose: "",
        dose: "",
        instruction: ""
    },
    immunization: {
        name: "",
        // FIXME:
        date: "",
        // FIXME:
        renewal_date: ""
    }
  };

// ==================================================================================
  // ----------------------------------------
  // TODO: RENDERS THE FORM TO THE PAGE
  // ----------------------------------------
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
        })
      )
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadForm();
  }
// ==================================================================================

  // NOT SURE WHAT THIS DOES
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // ==================================================================================
  // ------------------------------------------
  // CHANGES THE STATE OF THE FORM
  // ------------------------------------------
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.first_name && this.state.last_name) {
      // FIXME: SHOULD THIS BE FOR THE WHOLE FORM AND NOT JUST THE PRESCRIPTION?
      //        I THINK WE PROBABLY NEED A FUNCTION FOR BOTH
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
            glasses: this.state.needs.glasses,
            dentures: this.state.needs.dentures,
            cane_or_walker: this.state.needs.cane_or_walker,
            hearind_aid: this.state.needs.hearind_aid,
            wheelchair: this.state.needs.wheelchair
        },
        disabilities: this.state.disabilities,
        surgeries: {
            name: this.state.surgeries.name,
            doctor: this.state.surgeries.doctor,
            // FIXME:
            date: this.state.surgeries.date,
            comments: this.state.surgeries.comments
        },
        doctors: {
            primary_physician: {
                name: this.state.doctors.primary_physician.name,
                address: this.state.doctors.primary_physician.address,
                phone: this.state.doctors.primary_physician.phone
            },
            specialists: {
                physical_therapist: {
                    name: this.state.doctors.specialists.physical_therapist.name,
                    address: this.state.doctors.specialists.physical_therapist.address,
                    phone: this.state.doctors.specialists.physical_therapist.phone
                },
                dentist: {
                    name: this.state.specialists.dentist.name,
                    address: this.state.specialists.dentist.address,
                    phone: this.state.specialists.dentist.phone
                },
                other: {
                    specialism: this.state.specialists.other.specialism,
                    name: this.state.specialists.other.name,
                    address: this.state.address.specialists.other.address,
                    phone: this.state.specialists.other.phone
                }
            } 
        },
        pharmacy: {
            address: this.state.pharmacy.address,
            phone: this.state.pharmacy.phone
        },
        insurance: {
            provider: this.state.insurance.provider,
            account_number: this.state.insurance.account_number
        },
        medication: {
            name: this.state.medication.name,
            purpose: this.state.medication.purpose,
            dose: this.state.medication.dose,
            instruction: this.state.medication.instruction
        },
        immunization: {
            name: this.state.immunization.name,
            // FIXME:
            date: this.state.immunization.date,
            // FIXME:
            renewal_date: this.state.immunization.renewal_date
        }
      })
        .then(() => this.loadForm())
        .catch(err => console.log(err));
    }
// ==================================================================================
  // ----------------------------------
  // TODO: FUNCTION THAT DELETES A FORM ITEM
  // ----------------------------------
  // deleteFormItem = id => {
  //   API.deleteFormID(id)
  //     .then(() => this.loadForm())
  //     .catch(err => console.log(err));
  //   };

  
  };

  // FIXME:
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
