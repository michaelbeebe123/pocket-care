import React, { Component } from "react";
import axios from "axios";
import { Card, BDiv } from "bootstrap-4-react";
import { logo } from "../content/logo.png";
import "../components/SignUp/style.css";
import { LoginSubmitButton } from "../components/Login";
import { WelcomeReturnButton } from "../components/ReturnToHome/Index";

class LoginForm extends Component {
  state = {
    useremail: "",
    userpassword: ""
  };
  componentDidMount() {}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    this.userSignup();
  };

  userSignup = () => {
    console.log("something");
    var email = this.state.useremail;
    var password = this.state.userpassword;
    console.log(email, password);
    var send = this.state;
    axios.post("/login", send).then(data => {
      console.log(data);
    });
  };

  render() {
    return (
      <BDiv w="100" p="3" mb="2" bg="info" text="dark">
        <Card mx="auto" style={{ width: "auto" }}>
          <Card.Header>
            <h2><strong>Members log in here</strong></h2>
          </Card.Header>
          <Card.Image src={logo} />
          <Card.Body mx="auto">
            <BDiv className="col-md-10">
              <BDiv className="md-form">
                <i className="fas fa-envelope prefix"></i>
                <input
                  type="text"
                  id="orangeForm-email"
                  className="form-control"
                />
                <label htmlFor="orangeForm-email">Your email</label>
              </BDiv>

              <BDiv className="md-form">
                <i className="fas fa-lock prefix"></i>
                <input
                  type="password"
                  id="orangeForm-pass"
                  className="form-control"
                />
                <label htmlFor="orangeForm-pass">Your password</label>
              </BDiv>
              <BDiv className="text-center">
              <LoginSubmitButton />
              <WelcomeReturnButton />
              </BDiv>
            </BDiv>
          </Card.Body>
        </Card>
      </BDiv>
    );
  }
}

export default LoginForm;



