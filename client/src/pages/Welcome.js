import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, BDiv } from "bootstrap-4-react";
import "../components/SignUp/style.css";

class Welcome extends Component {
 

  render() {
    return (
      <BDiv w="100" p="3" mb="2" bg="info" text="dark center">
        <Card style={{ width: "auto" }}>
          <Card.Title>
            <strong>Hi! Welcome to Pocket Care.</strong>
          </Card.Title>
          <Card.Body>
              <BDiv className="text-center">
              <button className="btn btn btn-indigo btn-rounded mt-5">
                          <Link to="/signup"className={ window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
                            Sign up
                      
                          </Link>
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
          </Card.Body>
        </Card>
      </BDiv>
    );
  }
}

export default Welcome;