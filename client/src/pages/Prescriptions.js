// FIXME:

import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import FormComponent from "../components/Form";
import { Input, FormButton, DeleteButton} from "../components/Prescriptions"
class Prescriptions extends Component {
  state = {
    prescriptions: [],
    date: "",
    phone: "",
    dosage: ""
  };
  componentDidMount() {
    this.loadPrescriptions();
  }
  loadPrescriptions = () => {
    API.getPrescriptions()
      .then(res =>
        this.setState({ prescriptions: res.data, date: "", phone: "", dosage: "" })
      )
      .catch(err => console.log(err));
  };
  deletePrescription = id => {
    API.deletePrescription(id)
      .then(res => this.loadPrescriptions())
      .catch(err => console.log(err));
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.date && this.state.phone) {
      API.savePrescription({
        date: this.state.date,
        phone: this.state.phone,
        dosage: this.state.dosage
      })
        .then(res => this.loadPrescriptions())
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>My Current Medication List</h1>
            </Jumbotron>

            <form>
              <Input
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Date (required)"
              />
              <Input
                value={this.state.phone}
                onChange={this.handleInputChange}
                name="phone"
                placeholder="Phone (required)"
              />
              <Input
                value={this.state.dosage}
                onChange={this.handleInputChange}
                name="dosage"
                placeholder="dosage (Optional)"
              />
              <FormButton
                disabled={!(this.state.phone && this.state.date)}
                onClick={this.handleFormSubmit}
              >
                Submit Prescription
              </FormButton>
            </form>
            
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Current Medications</h1>
            </Jumbotron>
            {this.state.prescriptions.length ? (
              <List>
                {this.state.presciptions.map(prescription => (
                  <ListItem key={prescription._id}>
                    <Link to={"/prescriptions/" + prescription._id}>
                      <strong>
                        {prescription.date} by {prescription.phone}
                      </strong>
                    </Link>
                    <DeleteButton onClick={() => this.deletePrescription(prescription._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Prescriptions;