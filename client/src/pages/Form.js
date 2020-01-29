// TODO: FIXME: I NEED TO GET THE PRESCRIPTIONS AND THE FORM STUFF TO ONLY POST AND GET STUFF FROM A GIVEN ID

// ---------------------------------
// DEPENDENCIES
// ---------------------------------
import React, {Component} from "react";
import {Collapse, Card} from "bootstrap-4-react";
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
        API.getForm().then(res => this.state.form.push(res.data),).catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.loadForm();
    };
    // ==================================================================================

    handleInputChange = event => {
        console.log("test");
        const {name, value} = event.target;
        this.setState({[name]: value});
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
        }).then(() => {
            this.loadForm()
            console.log('hello logan')
        }).catch(err => console.log(err));
    };
    // ==================================================================================
    // ----------------------------------
    // FUNCTION THAT DELETES A FORM ITEM
    // ----------------------------------
    deleteFormItem = id => {
        API.deleteFormID(id).then(() => this.loadForm()).catch(err => console.log(err));
    };

    render() {
        return (
            <div className="accordion" id="accordionExample">
                <Card>
                    <Card.Header mb="0">
                        <Collapse.Button aria-expanded="false" id="headingOne" link target="#collapseOne">
                            General
                        </Collapse.Button>
                    </Card.Header>
                    <Collapse aria-labelledby="headingOne" data-parent="#accordionExample" id="collapseOne" show>
                        <Card.Body>
                            <div className="card">
                                <br></br>
                                <div className="card-header" id="headingOne">
                                    <h2 className="mb-0">
                                        <button aria-controls="collapseOne" aria-expanded="false" className="btn btn-link" data-target="#collapseOne" data-toggle="collapse" type="button">
                                            General
                                        </button>
                                    </h2>
                                </div>
                                <div aria-labelledby="headingOne" className="collapse show" data-parent="#careTabs" id="collapseOne">
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="formGroupExampleInput">First Name</label>
                                                <input className="form-control"
                                                    value={
                                                        this.state.first_name
                                                    }
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    name="first_name"/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="formGroupExampleInput">Last Name</label>
                                                <input className="form-control"
                                                    value={
                                                        this.state.last_name
                                                    }
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    name="last_name"/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="formGroupExampleInput">Date of Birth</label>
                                                <input className="form-control"
                                                    value={
                                                        this.state.date_of_birth
                                                    }
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    name="date_of_birth"/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="formGroupExampleInput">Gender</label>
                                                <select className="custom-select"
                                                    value={
                                                        this.state.gender
                                                    }
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    name="gender">
                                                    <option defaultValue>Choose...</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="formGroupExampleInput">Medicare Number</label>
                                                <input className="form-control"
                                                    value={
                                                        this.state.medicare
                                                    }
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    name="medicare"
                                                    placeholder="0000-000-0000"></input>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="formGroupExampleInput">Military ID</label>
                                                <input className="form-control"
                                                    value={
                                                        this.state.military_id
                                                    }
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    name="military_id"
                                                    placeholder="0000-000-0000"></input>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="formGroupExampleInput">Weight</label>
                                                <input className="form-control"
                                                    value={
                                                        this.state.weight
                                                    }
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    name="weight"
                                                    placeholder="000"></input>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="formGroupExampleInput">Blood Type</label>
                                                <select className="custom-select"
                                                    value={
                                                        this.state.blood_type
                                                    }
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                    name="blood_type">
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
                                    </Card.Body>
                                </Collapse>
                            </Card>
                        </div>
                 
                // <div className="card">
                //     <div className="card-header" id="headingTwo">
                //         <h2 className="mb-0">
                //             <button aria-controls="collapseTwo" aria-expanded="false" className="btn btn-link" data-target="#collapseTwo" data-toggle="collapse" type="button">
                //                 Allergies
                //             </button>
                //         </h2>
                //     </div>
                //     <div aria-labelledby="headingTwo" className="collapse show" data-parent="#careTabs" id="collapseTwo">
                //         <div className="card-body">
                //             <form>
                //                 <div className="form-group">
                //                     <label htmlFor="formGroupExampleInput">
                //                         Medication Allergies
                //                     </label>
                //                     <input className="form-control"
                //                         value={
                //                             this.state.medication_allergies
                //                         }
                //                         onChange={
                //                             this.handleInputChange
                //                         }
                //                         name="medication_allergies"
                //                         placeholder="Seperate with commmas."></input>
                //                 </div>
                //                 <div className="form-group">
                //                     <label htmlFor="formGroupExampleInput">Food Allergies</label>
                //                     <input className="form-control"
                //                         value={
                //                             this.state.food_allergies
                //                         }
                //                         onChange={
                //                             this.handleInputChange
                //                         }
                //                         name="food_allergies"
                //                         placeholder="Seperate with commmas."></input>
                //                 </div>
                //             </form>
                //         </div>
                //     </div>
                // </div>
                // <div className="card">
                //     <div className="card-header" id="headingThree">
                //         <h2 className="mb-0">
                //             <button aria-controls="collapseThree" aria-expanded="false" className="btn btn-link" data-target="#collapseThree" data-toggle="collapse" type="button">
                //                 Special Needs
                //             </button>
                //         </h2>
                //     </div>
                //     <div aria-labelledby="headingThree" className="collapse show" data-parent="#careTabs" id="collapseThree">
                //         <br></br>

                //         <h6>Select "Yes" for those that apply.</h6>

                //         <div className="card-body">
                //             <form>
                //                 <div className="form-group">
                //                     <label htmlFor="exampleFormControlSelect1">Glasses</label>
                //                     <select className="form-control"
                //                         value={
                //                             this.state.glasses
                //                         }
                //                         onChange={
                //                             this.handleInputChange
                //                         }
                //                         name="glasses">
                //                         <option value="true">Yes</option>
                //                         <option value="false">No</option>
                //                     </select>
                //                 </div>

                //                 <div className="form-group">
                //                     <label htmlFor="exampleFormControlSelect1">Dentures</label>
                //                     <select className="form-control"
                //                         value={
                //                             this.state.dentures
                //                         }
                //                         onChange={
                //                             this.handleInputChange
                //                         }
                //                         name="dentures">
                //                         <option value="true">Yes</option>
                //                         <option value="false">No</option>
                //                     </select>
                //                 </div>

                //                 <div className="form-group">
                //                     <label htmlFor="exampleFormControlSelect1">Cane/Walker</label>
                //                     <select className="form-control" id="exampleFormControlSelect1"
                //                         value={
                //                             this.state.cane_or_walker
                //                         }
                //                         onChange={
                //                             this.handleInputChange
                //                         }
                //                         name="cane_or_walker">
                //                         <option value="true">Yes</option>
                //                         <option value="false">No</option>
                //                     </select>
                //                 </div>

                //                 <div className="form-group">
                //                     <label htmlFor="exampleFormControlSelect1">Wheelchair</label>
                //                     <select className="form-control"
                //                         value={
                //                             this.state.wheelchair
                //                         }
                //                         onChange={
                //                             this.handleInputChange
                //                         }
                //                         name="wheelchair">
                //                         <option value="true">Yes</option>
                //                         <option value="false">No</option>
                //                     </select>
                //                 </div>

                //                 <div className="form-group">
                //                     <label htmlFor="exampleFormControlSelect1">Hearing Aid</label>
                //                     <select className="form-control"
                //                         value={
                //                             this.state.hearing_aid
                //                         }
                //                         onChange={
                //                             this.handleInputChange
                //                         }
                //                         name="hearing_aid">
                //                         <option value="true">Yes</option>
                //                         <option value="false">No</option>
                //                     </select>
                //                 </div>

                //                 <div className="form-group">
                //                     <label htmlFor="formGroupExampleInput">Other Disabilities</label>
                //                     <input className="form-control"
                //                         value={
                //                             this.state.disabilities
                //                         }
                //                         onChange={
                //                             this.handleInputChange
                //                         }
                //                         name="disabilities"
                //                         placeholder="Seperate with commmas."></input>
                //                 </div>
                //             </form>
                //         </div>
                //     </div>
                // </div>

                // <div className="card">
                //     <div className="card-header" id="headingFour">
                //         <h2 className="mb-0">
                //             <button aria-controls="collapseFour" aria-expanded="false" className="btn btn-link" data-target="#collapseFour" data-toggle="collapse" type="button">
                //                 Surgeries
                //             </button>
                //         </h2>
                //     </div>
                //     <div aria-labelledby="headingFour" className="collapse show" data-parent="#careTabs" id="collapseFour">
                //         <div className="card-body">
                //             <div className="form-group">
                //                 <label htmlFor="formGroupExampleInput">List Surgeries</label>
                //                 <input className="form-control"
                //                     value={
                //                         this.state.surgery_name
                //                     }
                //                     onChange={
                //                         this.handleInputChange
                //                     }
                //                     name="surgery_name"
                //                     placeholder="Seperate with commmas."></input>
                //             </div>
                //         </div>
                //     </div>

                //     <div className="card">
                //         <div className="card-header" id="headingFour">
                //             <h2 className="mb-0">
                //                 <button aria-controls="collapseFour" aria-expanded="false" className="btn btn-link" data-target="#collapseFour" data-toggle="collapse" type="button">
                //                     Doctor Information
                //                 </button>
                //             </h2>
                //         </div>
                //         <div aria-labelledby="headingFour" className="collapse show" data-parent="#careTabs" id="collapseFour">
                //             <div className="card-body">
                //                 <h4>Primary Care Physician</h4>
                //                 <div className="form-group">
                //                     <label htmlFor="formGroupExampleInput">Name</label>
                //                     <input className="form-control"
                //                         value={
                //                             this.state.primary_physician
                //                         }
                //                         onChange={
                //                             this.handleInputChange
                //                         }
                //                         name="primary_physician"
                //                         placeholder=""></input>
                //                 </div>
                //                 <div className="form-group">
                //                     <label htmlFor="formGroupExampleInput">Address</label>
                //                     <input className="form-control"
                //                         value={
                //                             this.state.primary_physician_address
                //                         }
                //                         onChange={
                //                             this.handleInputChange
                //                         }
                //                         name="primary_physician_address"
                //                         placeholder="Address, City, State, Zip"></input>
                //                 </div>
                //                 <div className="form-group">
                //                     <label htmlFor="formGroupExampleInput">Phone</label>
                //                     <input className="form-control"
                //                         value={
                //                             this.state.primary_physician_phone
                //                         }
                //                         onChange={
                //                             this.handleInputChange
                //                         }
                //                         name="primary_physician_phone"
                //                         placeholder="###-###-####"></input>
                //                 </div>

                //                 <h4>Dentist</h4>
                //                 <div className="form-group">
                //                     <label htmlFor="formGroupExampleInput">Name</label>
                //                     <input className="form-control"
                //                         value={
                //                             this.state.dentist_name
                //                         }
                //                         onChange={
                //                             this.handleInputChange
                //                         }
                //                         name="dentist_name"
                //                         placeholder=""></input>
                //                 </div>
                //                 <div className="form-group">
                //                     <label htmlFor="formGroupExampleInput">Address</label>
                //                     <input className="form-control"
                //                         value={
                //                             this.state.dentist_address
                //                         }
                //                         onChange={
                //                             this.handleInputChange
                //                         }
                //                         name="dentist_address"
                //                         placeholder="Address, City, State, Zip"></input>
                //                 </div>
                //                 <div className="form-group">
                //                     <label htmlFor="formGroupExampleInput">Phone</label>
                //                     <input className="form-control"
                //                         value={
                //                             this.state.dentist_phone
                //                         }
                //                         onChange={
                //                             this.handleInputChange
                //                         }
                //                         name="dentist_phone"
                //                         placeholder="###-###-####"></input>
                //                 </div>

                //                 <h4>Physical Therapist</h4>
                //                 <div className="form-group">
                //                     <label htmlFor="formGroupExampleInput">Name</label>
                //                     <input className="form-control"
                //                         value={
                //                             this.state.physical_therapist_name
                //                         }
                //                         onChange={
                //                             this.handleInputChange
                //                         }
                //                         name="physical_therapist_name"
                //                         placeholder=""></input>
                //                 </div>
                //                 <div className="form-group">
                //                     <label htmlFor="formGroupExampleInput">Address</label>
                //                     <input className="form-control"
                //                         value={
                //                             this.state.physical_therapist_address
                //                         }
                //                         onChange={
                //                             this.handleInputChange
                //                         }
                //                         name="physical_therapist_address"
                //                         placeholder="Address, City, State, Zip"></input>
                //                 </div>
                //                 <div className="form-group">
                //                     <label htmlFor="formGroupExampleInput">Phone</label>
                //                     <input className="form-control"
                //                         value={
                //                             this.state.physical_therapist_phone
                //                         }
                //                         onChange={
                //                             this.handleInputChange
                //                         }
                //                         name="physical_therapist_phone"
                //                         placeholder="###-###-####"></input>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </div>


                // <div className="card">
                //     <div className="card-header" id="headingFour">
                //         <h2 className="mb-0">
                //             <button aria-controls="collapseFour" aria-expanded="false" className="btn btn-link" data-target="#collapseFour" data-toggle="collapse" type="button">
                //                 Pharmacy Information
                //             </button>
                //         </h2>
                //     </div>
                //     <div aria-labelledby="headingFour" className="collapse show" data-parent="#careTabs" id="collapseFour">
                //         <div className="card-body">

                //             <div className="form-group">
                //                 <label htmlFor="formGroupExampleInput">Pharmacy Address</label>
                //                 <input className="form-control"
                //                     value={
                //                         this.state.pharmacy_address
                //                     }
                //                     onChange={
                //                         this.handleInputChange
                //                     }
                //                     name="pharmacy_address"
                //                     placeholder=""></input>
                //             </div>


                //             <div className="form-group">
                //                 <label htmlFor="formGroupExampleInput">Pharmacy Phone</label>
                //                 <input className="form-control"
                //                     value={
                //                         this.state.pharmacy_phone
                //                     }
                //                     onChange={
                //                         this.handleInputChange
                //                     }
                //                     name="pharmacy_phone"
                //                     placeholder="000-000-0000"></input>
                //             </div>
                //         </div>
                //     </div>
                // </div>


                // <div className="card">
                //     <div className="card-header" id="headingFour">
                //         <h2 className="mb-0">
                //             <button aria-controls="collapseFour" aria-expanded="false" className="btn btn-link" data-target="#collapseFour" data-toggle="collapse" type="button">
                //                 Insurance Information
                //             </button>
                //         </h2>
                //     </div>
                //     <div aria-labelledby="headingFour" className="collapse show" data-parent="#careTabs" id="collapseFour">
                //         <div className="card-body">

                //             <div className="form-group">
                //                 <label htmlFor="formGroupExampleInput">Insurance Provider</label>
                //                 <input className="form-control"
                //                     value={
                //                         this.state.insurance_provider
                //                     }
                //                     onChange={
                //                         this.handleInputChange
                //                     }
                //                     name="insurance_provider"
                //                     placeholder=""></input>
                //             </div>


                //             <div className="form-group">
                //                 <label htmlFor="formGroupExampleInput">Insurance Number</label>
                //                 <input className="form-control"
                //                     value={
                //                         this.state.insurance_number
                //                     }
                //                     onChange={
                //                         this.handleInputChange
                //                     }
                //                     name="insurance_number"
                //                     placeholder="ex: QQ123456C"></input>
                //             </div>
                //         </div>
                //     </div>
                // </div>

        //         <SubmitButton onClick={
        //             this.handleFormSubmit
        //         }/>

        //         <br></br>
        //     </div>
        // );
    // }
        )}};

export default Form;
