import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import {Component} from "react";
import axios from "axios";
class LoginComponent extends Component

 {
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = ()=>{


  }
userLogin =()=>{
console.log("something")
var email =this.state.email
var password =this.state.password
console.log(email,password)
var send = this.state
axios.post("/register",send).then((data) =>
{
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
                    <strong>Members log in here.</strong>
                  </h2>
                  <hr />
                    <div className="col-md-10">
                      
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
                        <button onClick={this.handleSubmit} className="btn btn-indigo btn-rounded mt-5">
                          Log In
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
}}
export default LoginComponent

