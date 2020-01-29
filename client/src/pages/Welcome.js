import React, { Component } from "react";
import { BDiv, Card } from "bootstrap-4-react";
import { SignupButton } from "../components/SignUp";
import { LoginButton } from "../components/Login";
import { logo } from "../content/logo.png";

class Welcome extends Component {
render() { 
    return (
      <BDiv w="100" p="3" mb="2" bg="info" text="dark">
        <Card mx="auto" style={{ width: "auto" }}>
          <Card.Header>
            <h2><strong>Welcome to Pocket Care</strong></h2>
          </Card.Header>
          <Card.Title text="center">Your Personal Medical Assistant at your fingertips</Card.Title>
          <Card.Image src={logo} />
          <Card.Body mx="auto">

            <SignupButton />
            <LoginButton />
            
          </Card.Body>
        </Card>
      </BDiv>

    );
  }
}

export default Welcome;