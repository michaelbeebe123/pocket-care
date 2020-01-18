import JumbotronComponent from "./components/Jumbotron";
import React from "react";
import { Col } from "../components/Grid";
class Prescriptions extends Component {
  state = {
    prescriptions: [],
    date: "",
    phone: "",
    dosage: ""
};
render() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Already a member? Log In Here</h1>
          </Jumbotron>
          <form>
            <Input
              value={this.state.user}
              onChange={this.handleInputChange}
              name="user"
              placeholder="User (Required)"
            />
            <Input
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              placeholder="Password (Required)"
            />
            <FormBtn
              disabled={!(this.state.author && this.state.title)}
              onClick={this.handleFormSubmit}
            >
              Submit Book
            </FormBtn>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
}

