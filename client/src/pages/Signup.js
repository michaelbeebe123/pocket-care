import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import SignupComponent from "../components/SignUp";

class SignUp extends Component {
  state = {
    username: "",
    useremail: "",
    userpassword: ""
  };
  componentDidMount() {

  }



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit=()=>{
    this.userSignup()
    }
    
    
    userSignup =()=>{
    console.log("something")
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
    <section className="view intro-2">
      <div className="mask rgba-gradient">
        <div className="container h-100 d-flex justify-content-center align-items-center">
          <div className="row  pt-5 mt-3">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h2 className="font-weight-bold my-4 text-center mb-5 mt-4 font-weight-bold">
                    <strong>Sign up</strong>
                  </h2>
                  <hr />
                  <div className="col-md-10">
                    <div className="md-form">
                      <i className="fas fa-user prefix"></i>
                      <input
                        type="text"
                        id="orangeForm-name"
                        className="form-control"
                      />
                      <label htmlFor="orangeForm-name">Your name</label>
                    </div>
                    <div className="md-form">
                      <i className="fas fa-envelope prefix"></i>
                      <input
                        type="text"
                        id="orangeForm-email"
                        className="form-control"
                      />
                      <label htmlFor="orangeForm-email">Your email</label>
                    </div>

                    <div className="md-form">
                      <i className="fas fa-lock prefix"></i>
                      <input
                        type="password"
                        id="orangeForm-pass"
                        className="form-control"
                      />
                      <label htmlFor="orangeForm-pass">Your password</label>
                    </div>

                      <div className="text-center">
                        <button onClick= {this.handleSubmit} className="btn btn-indigo btn-rounded mt-5">
                          Sign up
                        </button>
                      </div>
                      <div className="text-center">
                        <button className="btn btn-indigo btn-rounded mt-5">
                          <Link to="/login"className={ window.location.pathname === "/login" ? "nav-link active" : "nav-link"}>
                          Members Log in</Link>

                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
}
export default SignUp;