
import React, { Component } from 'react';
import { Collapse, Navbar, Nav, Button, Form  } from 'bootstrap-4-react';
import "./style.css";
import { Logout } from '../ReturnToHome/Index';


export default class NavComponent extends Component {
    render() {
        {
            return (
              <Navbar expand="lg" light bg="light">
                <Navbar.Brand href="#">
                  Pocket Care
                </Navbar.Brand>
                <Navbar.Toggler target="#navbarSupportedContent" />
                <Collapse navbar id="navbarSupportedContent">
                  <Navbar.Nav mr="auto">

                    <Nav.Item active>
                      <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link href="/history">Medical History</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/prescriptions">Prescription</Nav.Link>
                    </Nav.Item>
                    
                  </Navbar.Nav>
                  <Form inline my="2 lg-0">
                    <Logout />
                  </Form>
                </Collapse>
              </Navbar>
            )
          }
  }
}