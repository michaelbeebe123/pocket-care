import React, { Component } from 'react';
import { Navbar, Nav, Collapse, Button, BDiv } from 'bootstrap-4-react';

export default class NavComponent extends Component {
  render() {
    return (
      <Navbar expand="lg" light bg="light">
        <Navbar.Brand>
            <BDiv px="3" mx="2" bg="info" text="white">Pocket Care</BDiv>
        </Navbar.Brand>
        <Navbar.Toggler target="#navbarText" />
        <Collapse navbar id="navbarText">
          <Navbar.Nav mr="auto">
            <Nav.ItemLink href="/home" text="info" active>Home</Nav.ItemLink>
            <Nav.ItemLink href="/history" text="info">Medical History</Nav.ItemLink>
            <Nav.ItemLink href="/prescriptions" text="info">Prescriptions</Nav.ItemLink>
          </Navbar.Nav>
            <Button info outline active as="a" href="/">
                Logout
            </Button>
        </Collapse>
      </Navbar>
    )
  }
};

//         <ul className="nav nav-tabs">

//             <li className="nav-item">
//                 <Link className="nav-link" to="/home">Home</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" to="/history">Medical History</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" to="/prescriptions">Prescriptions</Link>

//             </li>
//             <li className="nav-item" id="logout">
//                 <button className="btn btn-outline-primary"><Link to="/">Logout</Link></button>
//             </li>

//         </ul>
//     );
// }

// export default NavComponent;
