import React, { Component } from "react";


class PillFinder extends Component {
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
   
        </div>
    );
  }
}
export default PillFinder;