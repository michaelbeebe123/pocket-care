import React, { Component } from "react";
import SignupComponent from "../components/SignUp";

class SignUp extends Component {
  state = {
    prescriptions: [],
    date: "",
    phone: "",
    dosage: ""
  };
  componentDidMount() {
  }



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

  };
  
  render() {
    return (
        <div>
            <SignupComponent/>
        </div>
    );
  }
}
export default SignUp;