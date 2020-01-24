import React, { Component } from "react";

// find proper endpoints
class PillFinder extends Component {
  state = {
    medication: [],
    description: "",
    risks: "",
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