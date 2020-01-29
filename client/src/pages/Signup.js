import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { BDiv, Card, Form } from "bootstrap-4-react";
import { SignupSubmitButton } from "../components/SignUp";
import { LoginButton } from "../components/Login";
import { WelcomeReturnButton } from "../components/ReturnToHome/Index";
import { logo } from "../content/logo.png";

class SignUpForm extends Component {

  constructor(props)
{
  super(props);
  this.state = {
    username: "",
    useremail: "",
    userpassword: ""
  }

  this.handlePasswordChange = this.handlePasswordChange.bind(this);

  this.handleUsernameChange = this.handleUsernameChange.bind(this);

  this.handleUseremailChange = this.handleUseremailChange.bind(this);
} 

handlePasswordChange(event) {
  this.setState({userpassword: event.target.value});
}

handleUsernameChange(event) {
  this.setState({username: event.target.value});
}

handleUseremailChange(event){
  this.setState({useremail:
  event.target.value});
}

  handleSubmit=()=>{
    this.userSignup()
    }
    
    
    userSignup =()=>{
    var name = this.state.username
    var email =this.state.useremail
    var password =this.state.userpassword
    console.log(name,email,password)
    var send = this.state
    axios.post("/signup",send).then((data) =>{
      console.log(data)
    })
    }
  
render() { 
    return (
      <BDiv w="100" p="3" mb="2" bg="info" text="dark">
        <Card mx="auto" style={{ width: "auto" }}>
          <Card.Header>
            <h2><strong>Join and Setup Your Pocket</strong></h2>
          </Card.Header>
          <Card.Image src={logo} />
          <Card.Body mx="auto">


      <Form>    

        <Form.Group>
          <i className="fas fa-user prefix"></i>
          <Form.Input type="name" 
            id="exampleInputName1"
            className="form-control"
            value={this.state.username}
            onChange={this.handleUsernameChange} 
          />
          <label htmlFor="exampleInputName1">Your name</label>
        </Form.Group>

        <Form.Group>
          <i className="fas fa-envelope prefix"></i>
          <Form.Input type="email" 
            id="exampleInputEmail1"
            className="form-control"
            value={this.state.useremail}
            onChange={this.handleUseremailChange}
          />
          <label htmlFor="exampleInputName1">Your email</label>
          <Form.Text text="muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group>
          <i className="fas fa-lock prefix"></i>
          <Form.Input type="password" 
            id="exampleInputPass1"
            className="form-control"
            value={this.state.userpassword}
            onChange={this.handleUserpasswordChange}
          />
          <label htmlFor="exampleInputName1">Your email</label>
        </Form.Group>

        <SignupSubmitButton onClick={this.handleFormSubmit} />
        <LoginButton />
        <WelcomeReturnButton />

      </Form>
      </Card.Body>
      </Card>
      </BDiv>

    );
  }
}

export default SignUpForm;