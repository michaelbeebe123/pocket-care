import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import {Component} from "react"
import axios from "axios";

class WelcomeComponent extends Component


 {
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
userSignup =()=>{
console.log("something")
var name = this.state.name
var email =this.state.email
var password =this.state.password
console.log(name,email,password)
var send = this.state
axios.post("/register",send).then((data) =>{
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
                    <strong>Hi! Welcome to Pocket Care.</strong>
                  </h2>
                      <div className="text-center">
    
                        <button className="btn-size btn btn-indigo btn-rounded mt-5">
                        <Link to="/signup"className={ window.location.pathname === "/login" ? "nav-link active" : "nav-link"}>
                          Sign up
                    
                        </Link>
                        </button>
                      </div>
                      <div className="text-center">
                        <button className="btn-size btn btn-indigo btn-rounded mt-5">
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
    </section>
  );
}}

export default WelcomeComponent;