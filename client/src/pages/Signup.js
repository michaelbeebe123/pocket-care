import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, BDiv } from "bootstrap-4-react";
import { logo } from "../content/logo.png";
import "../components/SignUp/style.css";

class SignUp extends Component {

  constructor(props)
{
  super(props);
  this.state = {
    username: "",
    useremail: "",
    userpassword: ""
  };
//   componentDidMount() {}
//   }

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

  handleSubmit = () => {
    this.userSignup();
  };

  userSignup = () => {
    console.log("something");
    var name = this.state.username;
    var email = this.state.useremail;
    var password = this.state.userpassword;
    console.log(name, email, password);
    var send = this.state;
    axios.post("/signup", send).then(data => {
      console.log(data);
    });
  };

  render() {
    return (
      <BDiv w="100" p="3" mb="2" bg="info" text="dark">
        <Card mx="auto" style={{ width: "auto" }}>
          <Card.Header>
            <h2>Sign Up with Pocket Care</h2>
          </Card.Header>
          <Card.Image src={logo} />
          <Card.Body mx="auto">
            <Card.Title mb="2" text="muted">
              Your Personal Medical Information at your fingertips.
            </Card.Title>

            <BDiv className="col-md-10">
              <BDiv className="md-form">
                <i className="fas fa-user prefix"></i>
                <input
                  type="text"
                  id="orangeForm-name"
                  className="form-control"
                />
                <label htmlFor="orangeForm-name">Your name</label>
              </BDiv>
              <BDiv className="md-form">
                <i className="fas fa-envelope prefix"></i>
                <input
                  type="text"
                  id="orangeForm-email"
                  className="form-control"
                />
                <label htmlFor="orangeForm-email">Your email</label>
              </BDiv>
      
//   handleSubmit=()=>{
//     this.userSignup()
//     }
    
    
//     userSignup =()=>{
//     var name = this.state.username
//     var email =this.state.useremail
//     var password =this.state.userpassword
//     console.log(name,email,password)
//     var send = this.state
//     axios.post("/signup",send).then((data) =>{
//       console.log(data)
//     })
//     }
  
// render() {
//   return (
//     <section className="view intro-2">
//       <div className="mask rgba-gradient">
//         <div className="container h-100 d-flex justify-content-center align-items-center">
//           <div className="row  pt-5 mt-3">
//             <div className="col-md-12">
//               <div className="card">
//                 <div className="card-body">
//                   <h2 className="font-weight-bold my-4 text-center mb-5 mt-4 font-weight-bold">
//                     <strong>Sign up</strong>
//                   </h2>
//                   <hr />
//                   <div className="col-md-10">
//                     <div className="md-form">
//                       <i className="fas fa-user prefix"></i>
//                       <input
//                         type="text"
//                         id="orangeForm-name"
//                         className="form-control"
//                         value={this.state.username}
//                         onChange={this.handleUsernameChange}
//                       />
//                       <label htmlFor="orangeForm-name">Your name</label>
//                     </div>
//                     <div className="md-form">
//                       <i className="fas fa-envelope prefix"></i>
//                       <input
//                         type="text"
//                         id="orangeForm-email"
//                         className="form-control"
//                         value={this.state.useremail}
//                         onChange={this.handleUseremailChange}
//                       />
//                       <label htmlFor="orangeForm-email">Your email</label>
//                     </div>

//                     <div className="md-form">
//                       <i className="fas fa-lock prefix"></i>
//                       <input
//                         type="password"
//                         id="orangeForm-pass"
//                         className="form-control"
//                         value={this.state.userpassword}
//                         onChange={this.handlePasswordChange}
//                       />
//                       <label htmlFor="orangeForm-pass">Your password</label>
//                     </div>

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
                <button
                  onClick={this.handleSubmit}
                  className="btn btn-indigo btn-rounded mt-5"
                >
                  Sign up
                </button>
              </BDiv>
              <BDiv className="text-center">
                <button className="btn btn-indigo btn-rounded mt-5">
                  <Link
                    to="/login"
                    className={
                      window.location.pathname === "/login"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Members Log in
                  </Link>
                </button>
              </BDiv>
            </BDiv>
          </Card.Body>
        </Card>
      </BDiv>
    );
  }
}

export default SignUp;
